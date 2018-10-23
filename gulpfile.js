const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['css', 'js', 'librarycss', 'libraryjs']);

// Modifying Bootstrap and Materialize
gulp.task('css', function () {
    gulp.src('app/sass/bootstrap.scss')
        .pipe(concat('main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static'))
});

var librarycss = [
    "node_modules/font-awesome/css/font-awesome.css"
];

// Library CSS 
gulp.task('librarycss', function () {
    gulp.src(librarycss)
        .pipe(concat('library.css'))
        .pipe(gulp.dest('static'))
});

// Javascript
gulp.task('js', function () {
    gulp.src('app/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('static'))
});

var libraryjs = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    "node_modules/lodash/dist/lodash.js",
    'node_modules/angular/angular.js',
    'node_modules/angular-animate/angular-animate.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
];

// Library Javascript
gulp.task('libraryjs', function () {
    gulp.src(libraryjs)
        .pipe(concat('library.js'))
        .pipe(gulp.dest('static'))
});

gulp.task('watch', ['css', 'js'], function () {
    gulp.watch('app/sass/**/*.scss', ['css']);
    gulp.watch('app/**/*.js', ['js']);
})