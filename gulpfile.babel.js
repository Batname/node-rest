import gulp from 'gulp';
import runSequence from 'run-sequence';
import gulpLoad from 'gulp-load-plugins';
let plagins = gulpLoad();

process.env.UV_THREADPOOL_SIZE = 100;

let watch = false;

function lazyRequireTask(path) {
  var args = [].slice.call(arguments, 1);
  return function(callback) {
    var task = require(path).apply(this, args);

    return task(callback);
  };
}

// Database tasks
gulp.task('db:load', lazyRequireTask('./services/node_modules/bat-users/tasks/db-load', {} ));

// Webpack build
const webpackConfig = {path: '../config/webpack.config.js', watch: true};
gulp.task('webpack', lazyRequireTask('./tasks/webpack', webpackConfig));

const dustConfig = {path: './services/' };
gulp.task('dust', lazyRequireTask('./tasks/dust', dustConfig ));


// Build and start watching for modifications
gulp.task('build:watch', cb => {
  watch = true;
  runSequence('webpack', () => {
    cb();
  });
});