// var gulp=require('gulp');
// var autoprefixer=require('gulp-autoprefixer');
// var babel=require('gulp-babel');
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';


gulp.task('autoprefixer',function(){
    gulp.src('*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('bootstrap/css'))
});

gulp.task('babel',function(){
    gulp.src('bootstrap/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('bootstrap'))
});