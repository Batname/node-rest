import gulp from 'gulp';
import dust =  from 'dustjs-linkedin';
dust.helpers = require('dustjs-helpers').helpers;
import dusthtml = from 'gulp-dust-html';

export default function(options){
  return cb => {

    return gulp.src([`${options.path}/node_modules/bat-users/views/index.dust`])
        .pipe(dusthtml({
            basePath: `${options.path}/node_modules/bat-users/views/`,
        }))
        .pipe(gulp.dest('.build/users'));
  }
}