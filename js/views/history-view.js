'use strict';


var HistoryView = Backbone.View.extend({
	initialize: function (options) {
		this.collection = options.collection;
		this.collection.on('sync', _.bind(this.syncListener, this));
	},

	yearArr: [],

	el: $('.searchbar'),

	compiledTemplate: _.template($('.template').html()),
	
	events: {
		'click #search': 'searchClicked',
	},

	syncListener: function() {
		// iterate through collection 
		var html = '';
		var view = this;

		this.collection.each(function(model) {
			// console.log(model.getHeadline());
			// console.log(model.getLeadParagraph());	
			// console.log(model.getWebUrl());
				html += view.compiledTemplate({		
					headline: model.getHeadline(),			
					leadparagraph: model.getLeadParagraph(),	
					url: model.getWebUrl()	
			});
		});
		$('#results').html(html);
	},

	searchClicked: function() {
			var year = $('#datePicker').val();
			year     = year.replace(/-/g, "");

			if (this.yearArr.lastIndexOf(year) === -1) {
				this.yearArr.push(year);
				console.log(this.yearArr);
				this.collection.getData(year);
				// $('#results').empty();
			}
		else {
			alert('Pick a new search date!');
		}
		
	}
});
	



