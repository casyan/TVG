$(document).ready(function(){
'use strict';
	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://api.themoviedb.org/3/discover/movie?with_genres=99&page=1&include_video=true&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=3914c87a7dd07e131a78847cd17387a7",
	  "method": "GET",
	  "headers": {},
	  "data": "{}"
	};

	$.ajax(settings.url).done(function (response) {
	  
		var images = [];
		var titles = [];
		var path = 'https://image.tmdb.org/t/p/w533_and_h300_bestv2';
		
		$.each(response.results, function (i) {
			images[i] = (response.results[i].poster_path);
			titles[i] = (response.results[i].title);
					
		});				
		
		$( "#fldSearch" ).autocomplete({
      		source: titles
    	});
		
		$('#gallery figure img').each(function(i){
			$(this).attr('src', path + images[i]);
			$(this).attr('title', titles[i]);
			$(this).attr('alt', titles[i]);
			i++;
		});				
		
		$('#gallery figure figcaption .titolo').each(function(i){
			$(this).html(titles[i]);
			i++;
		});
		
		console.log(titles);
	
	});	
	

});

			