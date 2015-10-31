'strong mode';

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

const lintPath = ['./*.js', './src/*.js', './src/routes/*.js', 'test/**/*.js'];
const testPath = ['./test/**/*.js'];
const jadePath = ['./src/views/**.jade'];
const staticPath = ['./src/public/**/**.*'];
const babelPath = ['./bin/**', './src/**/*.js'];

const watchPath = [
	...lintPath
	, ...testPath
	, ...jadePath
	, ...staticPath
	, ...babelPath
];

gulp.task('lint', () => {
	return gulp.src(lintPath)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('mocha', () => {
	return gulp.src(testPath)
		.pipe(mocha({ 'reporter': 'nyan' }));
});

gulp.task('build', ['build:jade', 'build:babel', 'build:statics']);

gulp.task('build:jade', () => {
	return gulp.src(jadePath, { 'base': 'src' })
		.pipe(gulp.dest('dest'));
});

gulp.task('build:statics', () => {
	return gulp.src(staticPath, { 'base': 'src' })
		.pipe(gulp.dest('dest'));
});

gulp.task('build:babel', () => {
	return gulp.src(babelPath)
		.pipe(babel())
		.pipe(gulp.dest('dest'));
});


gulp.task('watch', () => {
	gulp.watch(watchPath, ['lint', 'mocha', 'build']);
});
