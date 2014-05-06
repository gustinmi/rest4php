$(document).ready(function () {
    var jqBtnPreview,
        jqBtnSave,
        states,
        jqFolderBox,
        jqItemBox,
        jqEditorBody,
        jqTblCaption;

    /** A simple state engine
     *  Purpose is to decuple functionality from UI controls.
     *  In this way, the same functionality can be used for
     *     - GUI
     *     - URL api (bookmarkable URLs)
     *     - AJAX api fro web crawlers
     *     - Analytics API
     */
    states = {

        'data' : { //currently selected item
            'itemId' : '',
            'folderId' : ''
        },

        'open' : function(){ //create jQuerys object wrappers and bind events
            var folderBoxChange = function(e){
                    var newVal = $(this).val();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    html5app.log.info('Folders dropdown value changed to:' + newVal);
                    states.item.xhr(newVal);
                },
                itemBoxChange = function(e){
                    var itemId = $(this).val();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    html5app.log.info('Ads dropdown value changed to:' + itemId);
                    states.editor.change(itemId);
                };

            jqFolderBox = $("div.filters select.folder");
            jqItemBox = $('div.filters select.item');
            jqBtnPreview = $('#btnPreview');
            jqBtnSave = $('#btnSave');
            jqEditorBody = $("table.items tbody");
            jqTblCaption = $("table.items caption");

            // change when first select is clicked
            jqFolderBox.change(folderBoxChange);

            // change when second select is clicked
            jqItemBox.change(itemBoxChange);

            jqBtnPreview.click(function(e){
                var newMarkup;
                e.preventDefault();
                e.stopImmediatePropagation();
                newMarkup = $('textarea.editor').val();
                states.editor.preview(newMarkup);
            });
            jqBtnSave.click(function(e){
                var newMarkup;
                e.preventDefault();
                e.stopImmediatePropagation();
                newMarkup = $('textarea.editor').val();
                states.editor.save(newMarkup);
            });

            //trigger initial change to populate all interconnected object
            states.folder.xhr();

            $(window).bind('hashchange', function(){  //bookmarkable URLs support
                var hash = window.location.hash.replace(/^#/,''),
                    callback = function(){ //select right values in filters
                        jqItemBox.unbind();
                        jqFolderBox.val(states.data.folderId);
                        jqItemBox.val(states.data.itemId);
                        jqItemBox.change(itemBoxChange);
                    };
                html5app.log.info('index.js - hash changed to ' + hash);
                states.editor.change(hash, callback);
            });
        },
        "folder" : {
            'clear': function(){
                jqFolderBox.find('option').remove().end();
            },
            'xhr':function(){
                html5app.log.info('index.js - getting folders');
                $.ajax({
                    type: "GET",
                    url: html5app.settings.api.FOLDERS_URL,
                    data: {},
                    dataType: "json",
                    success: function (data) {
                        var options = '', i;
                        if (data && data['status'] && data['status']=='ok') {
                            html5app.log.info('index.js - folders sucessfully retrieved');
                            states.folder.clear();
                            for (i = 0; i < data['data'].length; i++) {
                                options += '<option value="' + data['data'][i][0] + '">' + data['data'][i][1] + '</option>';
                            }
                            jqFolderBox.html(options);
                            jqFolderBox.trigger("change");
                        }else{
                            html5app.log.error('Folders cannot be retrieved');
                        }
                    }
                });
            }
        },
        "item" : {
            'clear':function(){
                jqItemBox.find('option').remove().end();
            },
            'xhr':function(folderId){
                html5app.log.info('Repopulating ads');
                $.ajax({
                    type: "GET",
                    url: html5app.settings.api.FOLDERS_ADS_URL.format(folderId),
                    data: {},
                    dataType: "json",
                    success: function (data) {
                        var options = '', i;
                        if (data && data['status'] && data['status']=='ok') {
                            states.item.clear();
                            html5app.log.info('XHR Sucess retrieving ads');
                            options = '';
                            for (i = 0; i < data['data'].length; i++) {
                                options += '<option value="' + data['data'][i][0] + '">' + data['data'][i][1] + '</option>';
                            }
                            jqItemBox.html(options);
                            jqItemBox.trigger("change");
                        }else{
                            html5app.log.error('Adds cannot be retrieved');
                        }
                    }
                });
            }
        },
        'editor' : {
            'change' : function(itemId, callbackRefreshFilters){
                if (itemId != null) {
                    html5app.log.info('Getting item ' + itemId);
                    states.data['id'] = itemId;
                    $.ajax({
                        type: "GET",
                        url: html5app.settings.api.AD_URL.format(itemId),
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            var tbody = [], markup;
                            if (data && data['status'] && data['status']==='ok') {
                                html5app.log.info('XHR Sucess retrieving ad details');
                                html5app.log.info('Item name: ' + data['data'][0][0] + data['data'][0][1]);
                                jqEditorBody.empty();
                                tbody.push('<tr>');
                                tbody.push('<td>');
                                tbody.push('<textarea class="editor" wrap="hard" maxlength="2000">');
                                tbody.push(data['data'][0][2]);
                                tbody.push('</textarea>');
                                tbody.push('</td>');
                                tbody.push('<td>');
                                tbody.push('<div class="preview">')
                                markup = $('<div />').html(data['data'][0][2]).text();
                                tbody.push(markup);
                                tbody.push('</div>')
                                tbody.push('</td>');
                                tbody.push('</tr>');
                                jqEditorBody.html(tbody.join(''));

                                states.data = { 'itemId': data['data'][0][0], 'folderId': data['data'][0][3] };

                                if (callbackRefreshFilters)
                                    callbackRefreshFilters();
                            }else{
                                html5app.log.error('Ad details cannot be retrieved');
                            }
                            window.location.hash = itemId;
                        }
                    });

                    html5app.log.info('items changed');
                }
            },
            'preview' : function(markup){
                var newMarkup;
                $('div.preview').empty();
                newMarkup = $('<div />').html(markup);
                $('div.preview').html(newMarkup);
            },
            'save' : function(newData){
                $.ajax({
                    beforeSend: function(xhr){
                        xhr.setRequestHeader('Content-Type', 'application/json');
                    },
                    url: html5app.settings.api.SAVE_AD,
                    type: "POST",
                    processData:false,
                    data: JSON.stringify( {'id': states.data['id'], 'content' : newData} ),
                    success: function(data){
                        console.log(data);
                    }
                });
            }
        }
    };

    states.open();


});

