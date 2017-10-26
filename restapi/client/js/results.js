window.app.register('results', function(app) {

    'use strict';

    var exports = {},
        jqSubMenu;

    var config = {
        selContainer: 'section.results',
        selSubmenu : 'section.sub-menu'
    };

    var openResult = function(item){

        app.root.item.show();

    };

    var showResults = function() {
        var buff = [];

        jqSubMenu = $(config.selSubmenu);

        jqSubMenu.empty().html(window.sistory4.templates.resultBanner).show();

        $(window.publicationData).each(function(idx, elt){

            var jqWrapper  = $(window.sistory4.templates.resultItem.format(
                elt.img,
                elt.naziv,
                elt.desc,
                elt.tip,
                elt.kategorija,
                elt.media,
                elt.mediaNaziv
            ).replace(/>\s+</g,'><'));

            $('h2 a', jqWrapper).on('click', function(evt){
                evt.preventDefault();
                evt.stopPropagation();
                openResult($(this));
            }); 

            jqSubMenu.children('ol').append(jqWrapper);

        });

        
    };

    exports.show = function() {
        return showResults();
    };

    exports.config = function(key, val) {
        config[key] = val;
    };

    return exports;

});