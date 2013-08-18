$(document).ready(function () {
    var imgContainer,jqUploadId,jqSupplier,jqBranchesStr,first_name,last_name,contact_email,company_name,address,city,
        zip,map_url,tax_payer,tax_code,show_email,phone,fax,url,short_description,long_description,
        created_at,updated_at,max_active_products,active_from,active_to,facebook_url,newsletter,
        btnSave,btnCancel,ctrl,arr,settingsStates,jqTbl,jqRemoveAll,jqAddNew,dummyIndex = 0,containerCallback;

    garagesale.ui.settings = settingsStates = {
        'open' : function(openerCallback){
            garagesale.log.info('State open for supplierid:' + YARDSALE_STATE_DATA['supplier']);

            containerCallback = openerCallback; //the guy who opend me, will give "close" callback

            imgContainer = $('div.settings .imageContainer');
            jqUploadId = $('div.settings div.uploader input[type="hidden"]#item');
            jqSupplier = $('div.settings input.supplier');
            first_name = $('div.settings form#settings input.first_name');
            last_name = $('div.settings input.last_name');
            contact_email= $('div.settings input.contact_email');
            company_name= $('div.settings input.company_name');
            address= $('div.settings input.address');
            city= $('div.settings input.city');
            zip= $('div.settings input.zip');
            map_url= $('div.settings input.map_url');
            tax_payer= $('div.settings input.tax_payer');
            tax_code= $('div.settings input.tax_code');
            show_email= $('div.settings input.show_email');
            phone= $('div.settings input.phone');
            fax= $('div.settings input.fax');
            url= $('div.settings input.url');
            short_description= $('div.settings input.short_description');
            long_description= $('div.settings input.long_description');
            created_at= $('div.settings .created_at');
            updated_at= $('div.settings .updated_at');
            max_active_products= $('div.settings .max_active_products');
            active_from= $('div.settings .active_from');
            active_to= $('div.settings .active_to');
            facebook_url= $('div.settings input.facebook_url');
            newsletter = $('div.settings input.newsletter');
            btnSave = $('div.settings .aShrani');
            btnCancel = $('div.settings .aPreklici');
            jqBranchesStr = $('div.settings input[type="hidden"].branches');
            btnSave.bind('click',function(){
                settingsStates.save();
            });
            btnCancel.bind('click',function(){
                settingsStates.cancel();
            });

            $.ajax({
                type: "POST",
                url: garagesale.settings.api.GET_DATA_URL,
                data: { 'name': 'supplier', 'supplier': YARDSALE_STATE_DATA['supplier'] },
                dataType: "json",
                success: function (data) {
                    if (data && data.name==='supplier' && data.aaData) {
                        garagesale.log.info('OPEN xhr Sucess');
                        settingsStates.bind(data);
                    }
                }
            });
        },
        'bind' : function(bindData){
            var d = bindData['aaData'], branchesData = bindData['aaBranch'];
            garagesale.log.info('BIND state');
            jqUploadId.val(YARDSALE_STATE_DATA['supplier']);
            jqSupplier.val(YARDSALE_STATE_DATA['supplier']);
            first_name.val(d['first_name'] ? d['first_name'] : '');
            last_name.val(d['last_name'] ? d['last_name'] : '');
            contact_email.val(d['contact_email'] ? d['contact_email'] : '');
            company_name.val(d['company_name'] ? d['company_name'] : '');
            address.val(d['address'] ? d['address'] : '');
            city.val(d['city'] ? d['city'] : '');
            zip.val(d['zip'] ? d['zip'] : '');
            map_url.val(d['map_url'] ? d['map_url']['val'] : '');
            d['tax_payer'] && d['tax_payer'] === 'DA' ? tax_payer.prop('checked', true) : tax_payer.prop('checked', false);
            tax_code.val(d['tax_code'] ? d['tax_code'] : '');
            d['show_email'] && d['show_email'] === 'DA' ? show_email.prop('checked', true) : show_email.prop('checked', false);
            phone.val(d['phone'] ? d['phone'] : '');
            fax.val(d['fax'] ? d['fax'] : '');
            url.val(d['url'] ? d['url']['val'] : '');
            short_description.val(d['short_description'] ? d['short_description']['val'] : '');
            long_description.val(d['long_description'] ? d['long_description']['val'] : '');
            created_at.html(d['created_at'] ? d['created_at'] : '');
            updated_at.html(d['updated_at'] ? d['updated_at'] : '');
            max_active_products.html(d['max_active_products'] ? d['max_active_products'] : '');
            active_from.html(d['active_from'] ? d['active_from'] : '');
            active_to.html(d['active_to'] ? d['active_to'] : '');
            facebook_url.val(d['facebook_url'] ? d['facebook_url']['val'] : '');
            d['newsletter'] && d['newsletter'] === 'DA' ? newsletter.prop('checked', true) : newsletter.prop('checked', false);
            if (d['logo'] && d['logo']['val'] && d['logo']['val']!==''){
                settingsStates.logo.open(d['logo']['val']);
            }
            settingsStates.table1.open(branchesData); //bind branches table
        },
        'save' : function (){
            var rawSettForm = document.getElementById('FormSettings'), newBranchesArr;
            garagesale.log.info('SAVE STATE');
            arr = $.grep(arr, function(el, index){
                return el.id.indexOf('nov') !== -1;
                //return el.id !== idFilter;
            });
            newBranchesArr = JSON.stringify(arr); //hack: fill input hidden with stringified json array
            jqBranchesStr.val(newBranchesArr);

            $.ajax({
                type: "POST",
                url: garagesale.settings.api.SAVE_DATA_URL,
                data: $(rawSettForm).serialize(),
                dataType: "json",
                success: function (data) {
                    if (data && data.name==='supplier' && data.aaData==='ok') {
                        garagesale.log.info('SAVE STATE - sucess saving ');
                        settingsStates.popup('Uspešno shranjeno!');
                    }else{
                        settingsStates.popup('Napaka pri shranjevanju!');
                    }
                }
            });
        },
        'cancel' : function (){
            garagesale.log.info('STATE CANCEL');
            settingsStates.close();
        },
        'logo' : {
            open : function(logoUrl){
                var imgManager, imgOdstrani, img;
                garagesale.log.info('STATE LOGO OPEN for:' + logoUrl);
                imgManager = $('<div></div>', {class:'imgManager'});
                imgOdstrani = $('<img/>',
                    {
                        src:'icons/action_delete.png',
                        css:{borderWidth:5,width:'16px',height:'16px', display:'inline'},
                        click: settingsStates.logo.handlers.remove
                    });
                img = $('<img/>',
                    {
                        src:logoUrl,
                        css:{borderWidth:5,width:'150px',height:'113px', display:'inline'}
                    });
                imgManager.append(imgOdstrani);
                imgManager.append(img);
                imgContainer.append(imgManager);
            },
            'handlers' :{
                'remove' : function(){
                    garagesale.log.info('STATE LOGO HANDLER REMOVE');
                    $.ajax({
                        type: "POST",
                        url: garagesale.settings.api.LOGO_DELETE,
                        data: {'name': 'supplier', 'supplier': YARDSALE_STATE_DATA['supplier'] },
                        dataType: "json",
                        success: function (data) {
                            if (data && data.name==='supplier' && data.aaData==='ok') {
                                garagesale.log.info('SAVE STATE - sucess saving ');
                                settingsStates.popup('Uspešno shranjeno!');
                                imgContainer.html('');
                            }else{
                                settingsStates.popup('Napaka pri shranjevanju!');
                            }
                        }
                    });
                }
            }
        },
        'popup' : function(msg){
            garagesale.log.info('STATE POPUP');
            var popup = $('<div class="popup"></div>');
            popup.html(msg);
            popup.appendTo(document.body);
            setTimeout(function(){
                popup.remove();
            }, 2000);
        },
        'table1' : {
            'open' : function(bindData){
                arr = bindData;
                ctrl = $("div#tabctrl");
                jqTbl = $('table.grid');
                jqRemoveAll = $('button.removeAll');
                jqAddNew = $('button.addNew');
                jqRemoveAll.on('click', settingsStates.table1.rmAll);
                jqAddNew.on('click', settingsStates.table1.add.draw);
                $('.tabs .tab1').on('click', function () {
                    ctrl.attr("class", "tab1");
                });
                $('.tabs .tab2').on('click', function () {
                    ctrl.attr("class", "tab2");
                });
                $('.tabs .tab3').on('click', function () {
                    ctrl.attr("class", "tab3");
                });
                settingsStates.table1.bind(arr);
            },
            'bind' : function(myArr){
                jqTbl.find('tbody').empty();
                for(var i=0;i<myArr.length;i++){
                    var data = myArr[i],tr,td,btnRm;
                    tr = $('<tr/>');
                    tr.data('id',data['id']);
                    td = $('<td>' + data['id'] + '</td>');
                    tr.append(td);
                    td = data['name'] ? $('<td>' + data['name'] + '</td>') : $('<td/>');
                    tr.append(td);
                    td = data['address'] ? $('<td>' + data['address'] + '</td>') : $('<td/>');
                    tr.append(td);
                    td =  data['url'] && data['url']['val'] ? $('<td>' + data['url']['val'] + '</td>') : $('<td/>');
                    tr.append(td);
                    td = data['telephone'] ? $('<td>' + data['telephone'] + '</td>') : $('<td/>');
                    tr.append(td);
                    td = data['contact_name'] ? $('<td>' + data['contact_name'] + '</td>') : $('<td/>');
                    tr.append(td)
                    td = $('<td/>');
                    btnRm = $('<button/>',
                        {
                            text: 'Odstrani',
                            click: settingsStates.table1.rowRm
                        });
                    td.append(btnRm);
                    tr.append(td);
                    jqTbl.find('tbody').append(tr);
                }
                jqTbl.delegate("tr", "click", function(e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    var id = $(this).data('id');
                });
            },
            'rowRm':function(el){
                el.preventDefault();
                el.stopImmediatePropagation();
                var el2 = $(this).parent().parent();
                var idFilter = el2.data('id');
                arr = $.grep(arr, function(el, index){
                    return el.id !== idFilter;
                });
                settingsStates.table1.bind(arr);
            },
            'rmAll' : function(){
                arr = [];
                settingsStates.table1.bind(arr);
            },
            'add': {
                'draw' : function(){
                    var tfooter,tr,td,btnAdd,input,btnCancel;
                    tfooter = $('<tfoot/>');
                    tr = $('<tr/>');
                    tr.data('id','nov');

                    td = $('<td />', {text:'Dodaj'});
                    tr.append(td);

                    td = $('<td />');
                    input = $('<input/>',{
                        class : 'name',
                        type: 'text'
                    });
                    td.append(input);
                    tr.append(td);

                    td = $('<td />');
                    input = $('<input/>',{
                        class : 'address',
                        type: 'text'
                    });
                    td.append(input);
                    tr.append(td);

                    td = $('<td />');
                    input = $('<input/>',{
                        class : 'url',
                        type: 'text'
                    });
                    td.append(input);
                    tr.append(td);

                    td = $('<td />');
                    input = $('<input/>',{
                        class : 'telephone',
                        type: 'texr'
                    });
                    td.append(input);
                    tr.append(td);

                    td = $('<td />');
                    input = $('<input/>',{
                        class : 'contact_name',
                        type: 'text'
                    });
                    td.append(input);
                    tr.append(td);

                    td = $('<td />');
                    btnAdd = $('<button/>',
                        {
                            text: 'Potrdi',
                            click: settingsStates.table1.add.handle
                        });
                    td.append(btnAdd);
                    btnCancel = $('<button/>',
                        {
                            text: 'Prekliči',
                            click: settingsStates.table1.add.cancel
                        });
                    td.append(btnCancel);
                    tr.append(td);
                    tfooter.append(tr);
                    jqTbl.append(tfooter);
                    $('table.grid input.name').focus();
                },
                'handle' : function(){
                    var name = $('tfoot input[type="text"].name').val(),
                        address = $('tfoot input[type="text"].address').val(),
                        url = $('tfoot input[type="text"].url').val(),
                        telephone = $('tfoot input[type="text"].telephone').val(),
                        contact_name= $('tfoot input[type="text"].contact_name').val();
                    arr.push({'id':'nov ' + dummyIndex, 'name':name, 'address':address, 'url':url, 'telephone':telephone, 'contact_name':contact_name});
                    settingsStates.table1.bind(arr);
                    var row = $(this).parent().parent();
                    row.remove();
                    dummyIndex++;
                },
                'cancel' : function(e){
                    var row = $(this).parent().parent();
                    row.remove();
                },
                'clean' : function(){
                    $('table.branch tfoot').empty();
                }
            },
            "close" : function(){
                jqTbl.remove();
                jqRemoveAll.remove();
                jqAddNew.remove();
                jqRemoveAll.remove();
                jqAddNew.remove();
            }
        },
        'close' :function(){
            garagesale.log.info('State close');
            settingsStates.table1.close();
            imgContainer.html('');
            btnSave.unbind();
            btnCancel.unbind();
            //calling parents close handler
            if (containerCallback) containerCallback();
        }
    };

    //settingsStates.open();
});