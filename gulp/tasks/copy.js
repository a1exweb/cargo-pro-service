module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'img/**',
      '**/*.php',
      '*.php',
      '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};