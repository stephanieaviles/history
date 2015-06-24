module.exports = function(grunt) {
    'use strict';

    // project configuration
    grunt.initConfig({
        connect:  {
            server: {
                options: {
                    keepalive: true,
                    port: 9001,
                    base: './'
                }
            }
        },
        jshint: {
            options: {
            "curly": true,
            "eqnull": true,
            "eqeqeq": true,
            "undef": true,
            "strict": true,
            "unused": true,
            "latedef": true,
            "globals": {
                "jQuery": true,
                "console": true
                }
            },
        all: ['/*.js']
        }
    });

    // loading tasks (plugins)
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // register tasks
    // grunt.registerTask('default', ['uglify']);

};