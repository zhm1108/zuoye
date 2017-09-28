let gulp = require('gulp');
let connect = require('gulp-connect');
let sass = require('gulp-sass');
gulp.task('server',['sass'],function(){
    connect.server({
        root:'./',
        port:3000,
        livereload:true
    })
    gulp.watch(['./index.html','./dist/index.css'],['html']);
    gulp.watch('scss/*.scss',['sass']);
})
gulp.task('html',function(){
    gulp.src(['./index.html']).pipe(connect.reload())
})
gulp.task('sass',()=>{
    gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})