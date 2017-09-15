var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    karma = require('karma').Server,
    connect = require('gulp-connect');


// THEMES
gulp.task('js-themes', function () {
    return gulp.src(['index.js','js/*.js'])
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('unit-testing.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js'));
});

// TESTS

gulp.task('test', ['js-themes'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(code) {
        if (code == 1){
        console.log('js Unit Test failures, exiting process');
           done('js Unit Test Failures');
        } else {
            console.log('js Unit Tests passed');
            done();
        }
  });
});

gulp.task('watch', function() {
    gulp.watch('js/*.js');
})

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['js-themes', 'webserver', 'watch']);