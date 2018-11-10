const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// gulp.task('default', ['css', 'js', 'librarycss', 'libraryjs']);
gulp.task('default', ['css', 'librarycss', 'libraryjs']);

// Modifying Bootstrap 
gulp.task('css', function () {
    gulp.src('sass/**/*.scss')
        .pipe(concat('react-main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static'))
});

var librarycss = [
    "node_modules/font-awesome/css/font-awesome.css",
    "node_modules/react-image-crop/dist/ReactCrop.css",
    "node_modules/animate.css/animate.css",
];

// Library CSS 
gulp.task('librarycss', function () {
    gulp.src(librarycss)
        .pipe(concat('react-library.css'))
        .pipe(gulp.dest('static'))
});

// // Javascript
// gulp.task('js', function () {
//     gulp.src('app/**/*.js')
//         .pipe(concat('react-main.js'))
//         .pipe(gulp.dest('static'))
// });

var libraryjs = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    "node_modules/lodash/dist/lodash.js",
    "node_modules/axios/dist/axios.js",
    "node_modules/react/umd/react.development.js",
    "node_modules/react-dom/umd/react-dom.development.js",
    "node_modules/react-router/umd/react-router.js",
    "node_modules/react-router-dom/umd/react-router-dom.js",
    "node_modules/prop-types/prop-types.js",
    "node_modules/react-dropzone/dist/index.js",
    "node_modules/react-image-crop/dist/ReactCrop.js",
    "node_modules/react-markdown/umd/react-markdown.js",
];

// Library Javascript
gulp.task('libraryjs', function () {
    gulp.src(libraryjs)
        .pipe(concat('react-library.js'))
        .pipe(gulp.dest('static'))
});

// gulp.task('watch', ['css', 'js'], function () {
gulp.task('watch', ['css'], function () {
    gulp.watch('sass/**/*.scss', ['css']);
    // gulp.watch('app/**/*.js', ['js']);
})