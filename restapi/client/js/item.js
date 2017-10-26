// item.js

window.app.register('item', function(app) {

    'use strict';

    var exports = {},
    	jqMasterImageContainer,
    	jqDetails,
        jqSubMenu;

    var config = {
    	mediaContainerTmp : window.sistory4.templates.item,
    	detailsTmp : window.sistory4.templates.itemDetails,
    	detailsLiTmp : window.sistory4.templates.itemDetailsLi,
        selContainer : 'section.results',
        selSubmenu : 'section.sub-menu',
        selMasterImageContainer : '.main-content',
        selSearchContents : '.main-content .contents',
        masterImageurl : 'images/lj1.png',
        selDetails : 'section.object-details'
    };

    var hideItem = function() {
		$(config.selSearchContents).css('visibility', 'visible');
		jqMasterImageContainer.css('background-image', 'url(' + config.masterImageurl + ')');
		jqSubMenu.empty();
		jqSubMenu.show();
        $('section.collections').show();
        $('section.front-news').show();
    };


    var showItem = function(item) {
    	//debugger;
        var buff = [];

		jqDetails = $(config.selDetails);
		jqSubMenu = $(config.selSubmenu);
		jqMasterImageContainer = $(config.selMasterImageContainer);

		$(config.selSearchContents).css('visibility', 'hidden');
		jqMasterImageContainer.css('background-image', 'none');

		jqMasterImageContainer.append(config.mediaContainerTmp);

		$(window.pubDetails).each(function(idx, elt){
			buff.push(config.detailsLiTmp.format(elt.key, elt.item));
		});
		
		jqDetails.html(config.detailsTmp.format(buff.join(""))).show();

        jqSubMenu.hide();
        $('section.collections').hide();
        $('section.front-news').hide();
        
    };

    exports.show = function(item) {
        return showItem(item);
    };


    exports.hide = function(item) {
        return hideItem(item);
    };

    exports.config = function(key, val) {
        config[key] = val;
    };

    return exports;

});