'use strict';

	var articles = new ArticleList();
	console.log(articles);


	// object becomes options that gets captured in initalized collection
	var views = new HistoryView({
		collection: articles
	});
	console.log(views);
