const gulp = require ('gulp');
const babel = require ('gulp-babel');
const eslint = require ('gulp-eslint');

gulp.task ('lint', () =>
	gulp
		.src ('src/**')
		.pipe (eslint ())
		.pipe (eslint.format ())
		.pipe (eslint.failOnError()));

gulp.task ('build', ['lint'], () =>
	gulp
		.src ('src/**/*.js')
		.pipe (babel({
			presets: ['es2015', 'stage-3']
		}))
		.pipe (gulp.dest ('dist')));

gulp.task ('default', ['build']);
