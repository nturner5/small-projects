'use strict';
const gulp = require('gulp');
// const connect = require('gulp-connect');
// const open = require('gulp-open');
// const concat = require('gulp-concat');
const babel = require('gulp-babel')
const sass = require('gulp-sass');
// const livereload = require('gulp-livereload');

gulp.task('default', ['sass']);


gulp.task('sass', function() {
  gulp.src('./public/src/styles/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./public/dist'))
});

// gulp.task('watch', function(){ // this will watch for file changes
//     gulp.watch('src/**/*.html', ['sass'])
// });