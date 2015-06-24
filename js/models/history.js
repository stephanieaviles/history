'use strict';

var History = Backbone.Model.extend({

	getHeadline: function() {
		return this.get('headline').main;
	},
	getLeadParagraph: function() {
		return this.get('lead_paragraph');
	},
	getWebUrl: function() {
		return this.get('web_url');
	}
});



