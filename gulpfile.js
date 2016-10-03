/**
 * Created by ridel1e on 26/09/2016.
 */

'use strict';

const gulp = require('gulp'),
      less = require('gulp-less'),
      liveReload = require('gulp-livereload');

gulp.task('styles', function () {
  gulp.src('styles/importer.less')
    .pipe(less())
    .pipe(gulp.dest('./public'))
    .pipe(liveReload());
});

gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch('styles/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'watch']);