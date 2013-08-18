$(document).ready(function () {
    var jqBtnPreview,
        jqBtnSave,
        states,
        jqFolderBox,
        jqItemBox,
        jqEditorBody = $("table.items tbody"),
        jqTblCaption = $("table.items caption");

    //a simple state engine

    states = {

        'states' : {
            //all states goes here in order to prevent same variable setted twice
        },

        'open' : function(){ //create jQuerys object wrappers and bind events
            jqFolderBox = $("div.filters select.folder");
            jqItemBox = $('div.filters select.item');
            jqBtnPreview = $('#btnPreview');
            jqBtnSave = $('#btnSave');

            jqFolderBox.change(function(e){ // change when first select is clicked
                e.preventDefault();
                e.stopImmediatePropagation();
                var newVal = $(this).val();
                html5app.log.info('Folders dropdown value changed to:' + newVal);
                states.item.xhr(newVal);
            });
            jqItemBox.change(function(e){ // change when second select is clicked
                e.preventDefault();
                e.stopImmediatePropagation();
                var subVal = $(this).val();
                html5app.log.info('Ads dropdown value changed to:' + subVal);
                states.editor.change(subVal);
            });
            jqBtnPreview.click(function(e){
                var newMarkup;
                e.preventDefault();
                e.stopImmediatePropagation();
                newMarkup = $('textarea.editor').val();
                states.editor.preview(newMarkup);
            });
            jqBtnSave.click(function(e){

            });

            //trigger initial change to mpopulate all interconnected object
            states.folder.xhr();
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
                        if (data && data['status'] && data['status']=='ok') {
                            html5app.log.info('index.js - folders sucessfully retrieved');
                            states.folder.clear();
                            var options = '';
                            for (var i = 0; i < data['data'].length; i++) {
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
            'xhr':function(categoryId){
                html5app.log.info('Repopulating ads');
                $.ajax({
                    type: "GET",
                    url: html5app.settings.api.FOLDERS_ADS_URL.format(categoryId),
                    data: {},
                    dataType: "json",
                    success: function (data) {
                        if (data && data['status'] && data['status']=='ok') {
                            states.item.clear();
                            html5app.log.info('XHR Sucess retrieving ads');
                            var options = '';
                            for (var i = 0; i < data['data'].length; i++) {
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
            'change' : function(itemId){
                if (itemId != null) {
                    html5app.log.info('Getting item ' + itemId);
                    $.ajax({
                        type: "GET",
                        url: html5app.settings.api.AD_URL.format(itemId),
                        data: {},
                        dataType: "json",
                        success: function (data) {
                            var tbody = [], i, markup;
                            if (data && data['status'] && data['status']=='ok') {
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
            }
        },
        'close' : function(){
            //unbind events
            jqFolderBox.unbind();
            jqItemBox.unbind();
            //remove jquery objects from jquery cache
            jqFolderBox.remove();
            jqItemBox.remove();
            jqEditorBody.remove();
            jqTblCaption.remove();
        }

    };

    states.open();

    //modern browsers
    $(window).bind('hashchange', function() {
        var hash = window.location.hash.replace(/^#/,'');
        //TODO do something with this
    });


});

