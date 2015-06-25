define([
    'backbone', 'js/models/history'
], function(Backbone, History) {

    'use strict';
    
    var ArticleList = Backbone.Collection.extend ({
    	model: History,
    
        apiKey: "b23fbb3c0a662b106f75d5c48453ca3f:0:72257727",
    
    	url: 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp',
    
        parse: function(response) {
            return response.response.docs;
        },
    
        getData: function(year) {
            this.fetch({
                success: _.bind(this.fetchSuccess, this),
                error: _.bind(this.fetchError, this),
                dataType: 'jsonp',
                jsonpCallback: 'svc_search_v2_articlesearch',
                data: {
                    'api-key': this.apiKey,
                    'begin_date': year,
                    'sort': 'oldest'
    
                }
            });
        },
    
        fetchSuccess: function (collection, response) {
            this.trigger('sync', collection, response);
            console.log('Collection fetch success', response);
            console.log('Collection models: ', collection);
        },
    
        fetchError: function (collection, response) {
            throw new Error("Blah idk this is an error!");
        }
    });
    return ArticleList;
});
