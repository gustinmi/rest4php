// menu.js
window.app.register('menu', function(app) {

    'use strict';

    var exports = {},
        topMenuItems,
        jqSubMenu;

    var config = {
    	selTopMenuItems : 'body .top-container nav.top-bar section > ul > li',
    	selSubmenu : 'section.sub-menu'
    };

    var startMenu = function(){

    	topMenuItems = $(config.selTopMenuItems);
        jqSubMenu = $(config.selSubmenu);
        
        topMenuItems.on('click', function(e){
        	var clickedLi = $(this);
            var link = clickedLi.children('a');
            var menuId = link.attr('id');
            var text = link.text();
        	e.preventDefault();
            if (clickedLi.hasClass('active')) return false; // menu je že izbran

            $('nav li a').removeClass('active');
            clickedLi.children('a').addClass('active');

        	topMenuClicked(clickedLi);

            // prikaži subkategorije
            $("div.subtitle").text(text);
            $("#sub").show();
            jqSubMenu.show();
        	
            return false;
        });
    };

    var renderLinks = function(links, level){

        var subTmp = window.sistory4.templates.subCategory;
        var buff = [];
        links.each(function(idx) {
            if (!$(this).text()) return;
            buff.push(subTmp.format($(this).text(), idx, level));
        });

        return $(buff.join("").replace(/>\s+</g,'><'));
    };

    var topMenuClicked = function(clickedLi){
        //debugger;
		var text = clickedLi.children('a').text(),
            links = clickedLi.children('ul').children('li:not(".title, .parent-link")').children('a'),
            liIdx = clickedLi.index();
            
        app.root.breadcrumbs.add(text, 0);
        app.title(text);
        
        var jqWrapper = renderLinks(links, 1);
        jqWrapper.on('click', function(evt){
        	var subMenu = $(this);
        	evt.preventDefault();
        	evt.stopPropagation();
			subMenuClicked(subMenu, liIdx);
        }); 

        // add new subcategories to listview
        jqSubMenu.empty();
        jqSubMenu.html('<div class="grid-x" class="sub-categories"></div>');
        jqSubMenu.children('div.grid-x').append(jqWrapper);
    };

    var subMenuClicked = function(jqSubmenu, liIdx){

        var jqWrapper;
    	var posOfLi = $('a', jqSubmenu).data('idx');
    	var levelOfLi = parseInt($('a', jqSubmenu).data('level')) + 1;
    	var subName = $('span.title', jqSubmenu).text();

    	console.log("Sub item pos: {0}, level: {1}, name: {2}".format(posOfLi, levelOfLi, subName));
		app.root.breadcrumbs.add(subName, 1);

        var parentLi = topMenuItems.eq(liIdx);
        var subLi = parentLi.children('ul').children('li:not(".title, .parent-link")').eq(posOfLi);

        //var subSub;
    	if (levelOfLi == 3){

            app.root.results.show();

        }else{

            var subSub = subLi.children('ul').children('li:not(".title, .parent-link")');
            var links = subSub .children('a');

            if (links.length > 0){ // we have further navigation

                jqWrapper = renderLinks(links, levelOfLi);

                jqWrapper.on('click', function(evt){
                    var subMenu = $(this);
                    evt.preventDefault();
                    evt.stopPropagation();
                    subMenuClicked(subMenu, liIdx);
                }); 

                jqSubMenu.empty();
                jqSubMenu.html('<div class="grid-x" class="sub-categories"></div>');
                jqSubMenu.children('div.grid-x').append(jqWrapper);
                jqSubMenu.show();
            }else{
                app.root.results.show();
            }
        }
        
    	return false;
    };

    exports.start = function(item) {
        return startMenu();
    };

    exports.config = function(key, val) {
        config[key] = val;
    };

    return exports;

});