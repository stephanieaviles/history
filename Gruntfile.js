module.exports = function(grunt) {
	'use strict';

	// project configuration
	grunt.initConfig({
		jshint: {
            options: {
            	"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"globals": {
			    	"jQuery": true,
			    	"console": true
			 	}
            },
            all: ['js/*.js']
        }
	});

	// loading tasks (plugins)
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// register tasks
	// grunt.registerTask('default', ['uglify']);

};