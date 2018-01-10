'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
//var babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('assets/scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('minify', function () {
    gulp.src('assets/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

//gulp.task('babel', () =>
//        gulp.src('assets/js/script.js')
//            .pipe(babel({
//                presets: ['env']
//            }))
//            .pipe(gulp.dest('public/js'))
//);

gulp.task('sass:watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});