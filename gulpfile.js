var babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    ngAnnotate = require('gulp-ng-annotate'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('build', function() {
  return gulp.src(['./src/js/main.js', './src/js/**/*.js'])
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public'))
});

gulp.task('html', function() {
  return gulp.src([
    'public/index.html'
  ])
  .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp.src('./src/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'))
    .pipe(livereload());
});

gulp.task('all', function() {
  livereload.listen();
  gulp.watch('src/js/*.js', ['build']);
  gulp.watch('src/js/**/*.js', ['build']);
  gulp.watch('public/*.html', ['html']);
  gulp.watch('src/js/**/*.html', ['html']);
  gulp.watch('src/css/*.scss', ['sass']);
});

gulp.task('watch', ['all'], function() {
  return nodemon({
    script: 'server.js'
  });
});
