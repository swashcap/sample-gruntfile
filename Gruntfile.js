/* global module,require */

module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          precision: 10
        },
        files: {
          'assets/css/main.css': 'assets/css/scss/main.scss'
        },
      }
    },

    autoprefixer: {
      dist: {
        options: {
          browsers: ['last 2 versions', 'ie 9'],
        },
        src: 'assets/css/main.css',
        dest: 'assets/css/main.css'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc.json',
        force: true,
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'assets/js/**/*.js'
      ]
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js']
        }
      }
    }
  });

  grunt.registerTask('styles', ['sass', 'autoprefixer']);
  grunt.registerTask('scripts', ['jshint', 'uglify']);
};