'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
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
    }
  });

  grunt.registerTask('styles', ['sass', 'autoprefixer']);
};