'use strict';

const gulp = require('gulp');
const reaname = require('gulp-rename');
const reactEasy = require('gulp-react-easy');

gulp.task('default', ['js', 'w']);
gulp.task('w', () => {
  gulp.watch('./src/js/**/*', ['js']);
});
gulp.task('js', () => {
  return reactEasy({
    'file': './src/js/app.jsx',
    'debug': true
  })
  .to('app.js')
  .pipe(gulp.dest('./dist/js'));
});