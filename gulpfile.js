const gulp = require ('gulp');
const traceur = require ('gulp-traceur');

gulp.task ('default', () =>
	gulp.src ('src/**/*.js')
	.pipe (traceur ({
		asyncFunctions: true
	}))
        .pipe (gulp.dest ('dist')));
