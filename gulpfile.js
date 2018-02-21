// consent the prog to make tasks
// jshint ignore: start
var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');


gulp.task('default', function(){ //task creation, (name of task, function)
    return gutil.log('Gulp in esecuzione'); // to execute on terminal -> gulp default

});

gulp.task('copiaHtmlJs', function(){
    //copy any html files in source / to public/
    gulp.src('source/html/*.html').pipe(gulp.dest('dist'));
    gulp.src('source/javascript/*.js').pipe(gulp.dest('dist'));
});

gulp.task('build-js', function(){
    return gulp.src('source/javascript/*.js')
        .pipe(sourcemaps.init())
         .pipe(concat('bundle.js')) // create bundle.js where all the .js will be compressed in one single line
         // only uglify if gulp is ran with '--type production'
         .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'));
});

// configure the jshint task
gulp.task('jshint', function(){
    return gulp.src('source/javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

