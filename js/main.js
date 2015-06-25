require.config({
	baseUrl: '/',
	paths: {
		'jquery': 'js/lib/jquery-min',
		'backbone': 'js/lib/backbone-min',
		'underscore': 'js/lib/underscore-min'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'backbone': {
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
});

requirejs(['instances']);

