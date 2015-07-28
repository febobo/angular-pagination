var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect' , function(){
  connect.server({
    port : 3001,
    livereload : true
  });
})

gulp.task('html' , function(){
  gulp.src('./demo/*.html')
    .pipe(connect.reload);
})

gulp.task('js' , function(){
  gulp.src('./demo/*.js')
    .pipe(connect.reload);
})

gulp.task('watch' , function(){
  gulp.watch(['./demo/*.html'],['html']);
  gulp.watch(['./demo/*.js'],['js']);
})

gulp.task('serve' , ['connect' , 'watch'])
