'use strict';
const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const concat = require('gulp-concat');
const babel = require('gulp-babel')
const sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
  gulp.src('./public/src/styles/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./public/dist'))
});