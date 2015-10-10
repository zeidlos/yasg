var gulp = require('gulp');
var assemble = require('assemble');
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var gulpAssemble = require('gulp-assemble');

gulp.task('assemble', function () {
  gulp.src('pages/*.hbs')
    .pipe(gulpAssemble(assemble))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(extname())
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);