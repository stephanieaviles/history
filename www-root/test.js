'use strict';

var apiKey  = "b23fbb3c0a662b106f75d5c48453ca3f:0:72257727";
var baseUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp";
var yearArr = [];

$(document).ready( function() {
	$('#search').click(function(){
		console.log('click');
  	searchClicked($('#datePicker').val());
  });

function searchClicked(year) {
	year = year.replace(/-/g, "");

	if (yearArr.lastIndexOf(year) === -1) {
		
		$.ajax(baseUrl, {
			jsonpCallback: "svc_search_v2_articlesearch",
			dataType: "jsonp",
			data: {
				'api-key': apiKey,
				'begin_date': year,
				'sort': 'oldest'
			}
		});
		yearArr.push(year);
		$("#results").empty();
	}
	else {
		alert("Pick a new search date!");
	}
}
});

function svc_search_v2_articlesearch(response) {
	var docs = response.response.docs; 
	var counter = 0;

	for (counter; counter < docs.length; counter++) {	
	$('#results').append("<li class=\"article\">" + 
		"<h2>" + docs[counter].headline.main + "</h2>" +
		"<p>" + docs[counter].lead_paragraph + "</p>" + 
		"<p>" + "You can find the full article " +
		"<a href=" + docs[counter].web_url + ">here</a> " + 
		"</p>" +
		"</li>" + 
		"<br>");
	};	
}




