/*
 * Copyright (c) 2015-2017 PointSource, LLC.
 * MIT Licensed
 */

module.exports = function(config) {
  config.set({

    basePath: './',
    frameworks: ['jasmine'],

    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/foundation-sites/dist/foundation.js',
      'bower_components/snapjs/snap.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-snap/angular-snap.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/app.module.js',
      'js/**/*.js',
      'templates/*.html',
      'test/*-spec.js'
    ],

    reporters: ['mocha', 'coverage'],

    preprocessors: {
      'js/**/*.js': ['coverage'],
      'templates/*.html': 'ng-html2js'
    },

    coverageReporter: {
      dir: '.',
      reporters: [ { type : 'lcovonly', subdir: '.', file: 'coverage.lcov' } ]
    },

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor',
      'karma-chrome-launcher'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
    // browsers: ['Chrome'],
    // singleRun: false
  });
};
