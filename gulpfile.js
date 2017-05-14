var gulp = require('gulp'),
  less = require('gulp-less'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  htmlmin = require('gulp-htmlmin'),//压缩html
  cheerio = require('gulp-cheerio'),//合并html,js,css
  gulpif = require('gulp-if'),
  ngAnnotate = require('gulp-ng-annotate'),//用于ng的压缩
  less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('less/*/*.less')
    .pipe(less())
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/push/css'))
});

gulp.task('less-tpl', function (platform) {
  return gulp.src(['less/' + platform + '/header.less'])
    .pipe(less())
    .pipe(concat('mix.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/push/css/' + platform))
});

// gulp.task('styles', function () {
//   return gulp.src('dist/dev/css/*/*.css', { style: 'expanded' })
//     .pipe(autoprefixer('last 2 version'))
//     // .pipe(concat('main.css'))
//     // .pipe(gulp.dest('dist/dev'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(cssnano())
//     .pipe(gulp.dest('dist/push/css'))
//   // .pipe(notify({ message: 'styles task complete' }));
// });
gulp.task('scripts-common', function () {
  // return gulp.src(['js/*/*.js', 'js/*.js'])
  // return gulp.src(['js/devices.js'])
  // .pipe(jshint('.jshintrc'))
  // .pipe(jshint.reporter('default'))
  // .pipe(concat('main.js'))
  // .pipe(gulp.dest('dist/dev'))
  // .pipe(rename({ suffix: '.min' }))
  // .pipe(gulpif('*.js', ngAnnotate()))
  // .pipe(uglify())
  // .pipe(gulp.dest('dist/push/js'))
  return gulp.src(['js/lib/*.js'])
    .pipe(jshint.reporter('default'))
    .pipe(concat('lib.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif('*.js', ngAnnotate()))
    .pipe(gulp.dest('dist/push/js'))
});
gulp.task('scripts-app', function () {
  return gulp.src(['js/index.js', 'js/common/*.js'])
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif('*.js', ngAnnotate()))
    .pipe(gulp.dest('dist/push/js'))
});
gulp.task('tpl-common', function () {
  return gulp.src(['tpl/*.html'])
    .pipe(gulp.dest('dist/push/tpl'))
});
gulp.task('images', function () {
  return gulp.src(['images/phone/*', 'images/*.png'])
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('dist/push/source/images/'))
  // .pipe(notify({ message: 'Images task complete' }));
});
gulp.task('html', function () {
  // return gulp.src('responsinator.html')
  //   .pipe(concat('index.html'))
  //   .pipe(uglify())
  //   .pipe(gulp.dest('dist/push/'))
  var options = {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  };
  gulp.src('index.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/push'));
});
// gulp.task('indexHtml', function () {
//   return gulp.src('dist/dev/responsinator.html')
//     .pipe(cheerio(function ($) {
//       $('script').remove();
//       $('link').remove();
//       $('body').append('<script src="main.min.js"></script>');
//       $('head').append('<link rel="stylesheet" href="main.min.css">');
//     }))
//     .pipe(gulp.dest('dist/push'));
// });
gulp.task('clean', function () {
  return del(['dist/dev/*', 'dist/push/*']);
});
gulp.task('default', ['clean'], function () {
  // gulp.start('styles', 'scripts', 'images');
  
  gulp.start('less', 'scripts-common', 'scripts-app', 'tpl-common', 'images', 'html');
  // gulp.start('clean', 'less', 'styles');
});
gulp.task('watch', function () {
  gulp.watch('css/*.css', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('image/*', ['images']);
  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});