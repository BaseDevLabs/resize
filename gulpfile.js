'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)).pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('html/stylesheets'));
});

gulp.task('copy', function() {
  gulp.src('node_modules/normalize.css/normalize.css').pipe(gulp.dest('html/stylesheets/'));
});