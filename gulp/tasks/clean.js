import config from '../config';
import clean from 'gulp-clean';
import gulp from 'gulp';

gulp.task('clean', function() {
  return gulp.src(config.buildDir, {force: true}).pipe(clean());
});
