function App(title) {
	this.titleTxt = title;
    this.root = {};
}

App.prototype = {

	register : function(name, factory){
		this.root[name] = factory(this);
	},

	fillCategory : function(){
		$.ajax({ 
		    type: 'GET', 
		    url: window.sistory4.configuration.restUrl + '?' + $.param({handler:'Category'}), 
		    dataType: 'json',
		    success: function (data) { 
		    	//debugger;

		    	if (data.status === 'ok'){
		    		$('#categoryList').empty();

			        $.each(data.data, function(idx, elt) {

						$('#categoryList').append($('<li>', {
				            text: elt[1],
				            data : {
				            	"category-id" : elt[0] 
				            }
				        }));

						//$('#categoryList').append('<li data-category-id="' + elt[0] + '">' + elt[1]  + '</li>')			        	
			        });
		    	}


		    }
		});
	},

	fillAdds : function(){

		$.ajax({ 
		    type: 'GET', 
		    url: window.sistory4.configuration.restUrl + '?' + $.param({handler:'Add'}), 
		    dataType: 'json',
		    success: function (data) { 
		    	//debugger;
		    	if (data.status === 'ok'){
		    		var jqGrid = $('.collectionsGrid');
		    		jqGrid.empty();

			        $.each(data.data, function(idx, elt) {

			        	var jqItem = $(window.sistory4.templates.addBanner);
			        	$('.category-flag', jqItem).text(elt[1]);
			        	$('.title', jqItem).text(elt[0]);

						jqGrid.append(jqItem);

			        });
		    	}


		    }
		});

	},

    onStart: function() {
		'use strict';
		this.root.menu.start();
		this.title();

		this.fillCategory();
		this.fillAdds();

		$('#homeBtn').on('click', function(){
			window.location.href = "index.html";
			return false;
		});

		// scroll to top if navigation bar is clicked
		$('.top-container').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});

		$('section.collections .coll-item').on('click', function(){
            debugger;
			app.root.results.show();
			return false;
		});


    },

    title : function(title){
    		
    	if (title){
			$('title').text(this.titleTxt + " - " + title);
    	}else{
    		$('title').text(this.titleTxt);
    	}

    },

    hashchange : function(hash){
    	console.log("Hash changed" + hash);
    	// todo : support bookmarkable urls
    }

};

// bootstrap sequence

(function(){
	var app = new App("sistory 4"); 
	window.app = app;
	window.register = app.register;
	document.addEventListener("DOMContentLoaded", function() {
		app.onStart();	
	});
	window.addEventListener("hashchange",function(){
		app.hashchange(document.location.hash);
	});
})();