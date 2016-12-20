'use strict';

var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    spawnSync = require('child_process').spawnSync,
    stylish = require('jshint-stylish'),
    templateCache = require('gulp-angular-templatecache'),
    merge = require('merge-stream');

gulp.task('jshint', function () {
  return gulp.src(['js/**/*.js', '!js/templates.module.js', 'test/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter(stylish, { verbose: true }));
});

gulp.task('generate-templates', function () {
  return gulp.src('templates/*.html')
      .pipe(templateCache('templates.module.js', {
        module: 'blueOakUiTemplates',
        standalone: true,
        transformUrl: function (url) {
          return url.replace(/^/, 'templates/');
        }
      }))
      .pipe(gulp.dest('js'));
});

gulp.task('unit-test', ['generate-templates'], function () {
  return spawnSync('npm', ['test'], {
    stdio: 'inherit'
  });
});

gulp.task('clean', ['jshint', 'unit-test'], function () {
  return gulp.src('dist/*', { read: false })
             .pipe(rimraf());
});

gulp.task('sass-default', ['copy'], function () {
  return gulp.src('dist/scss/blue-oak-ui-default.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-vendor-js', ['clean'], function () {
  var source = [
    'bower_components/jquery/dist/jquery.js',
    // 'bower_components/jquery.cookie/jquery.cookie.js',
    // 'bower_components/jquery-placeholder/jquery.placeholder.js',
    // 'bower_components/modernizr/modernizr.js',
    // 'bower_components/fastclick/lib/fastclick.js',
    'bower_components/foundation-sites/dist/foundation.js',
    'bower_components/snapjs/snap.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-snap/angular-snap.js',
    'bower_components/angular-sanitize/angular-sanitize.js'
  ];

  return gulp.src(source)
             .pipe(gulp.dest('dist/vendor'));
});

gulp.task('copy-js', ['clean'], function () {
  return gulp.src('app/*.js')
             .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-fonts', ['clean'], function () {
    return gulp.src('fonts/**')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-css', ['clean'], function () {
  var normalizeStream = gulp.src('bower_components/normalize-css/normalize.css')
                            .pipe(gulp.dest('dist/scss/vendor/normalize-css/'));

  var angularSnapStream = gulp.src('bower_components/angular-snap/angular-snap.css')
                              .pipe(gulp.dest('dist/scss/vendor/angular-snap/'));

  var foundationStream = gulp.src('bower_components/foundation-sites/scss/**/*')
                             .pipe(gulp.dest('dist/scss/vendor/foundation-sites/'));

  var blueOakStream = gulp.src('scss/**/*')
                          .pipe(gulp.dest('dist/scss'));

  return merge(normalizeStream, angularSnapStream, foundationStream, blueOakStream);
});

gulp.task('copy-templates', ['clean'], function () {
  return gulp.src('templates/*.html')
             .pipe(gulp.dest('dist/templates'));
});

gulp.task('concat-js', ['clean'], function () {
  var source = [
    'js/templates.module.js',
    'js/app.module.js',
    'js/**/*.js'
  ];

  return gulp.src(source)
             .pipe(concat('blue-oak-ui.js'))
             .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', ['concat-js'], function () {
  return gulp.src('dist/blue-oak-ui.js')
             .pipe(uglify())
             .pipe(rename({
               extname: '.min.js'
             }))
             .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', ['sass-default'], function () {
  return gulp.src('dist/blue-oak-ui.css')
             .pipe(minifyCss())
             .pipe(rename({
               extname: '.min.css'
             }))
             .pipe(gulp.dest('dist'));
});

gulp.task('copy', [
  'copy-vendor-js',
  'copy-js',
  'copy-css',
  'copy-templates',
  'copy-fonts'
]);

gulp.task('build', [
  'copy',
  'sass-default',
  'minify-css',
  'concat-js',
  'minify-js'
]);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function () {
  var source = [
    'scss/**/*.scss',
    '!scss/vendor/**',
    'js/**/*.js',
    '!js/templates.*.js',
    'templates/*.html',
    'test/*.js'
  ];

  return gulp.watch(source, ['build']);
});

