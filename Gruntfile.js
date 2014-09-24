/* globals module */
module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/bundle.<%= pkg.name %>.js'
      }
    },
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				src: 'dist/bundle.<%= pkg.name %>.js',
				dest: 'dist/bundle.<%= pkg.name %>.min.js'
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
			options: {
				jshintrc: true
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);

};
