// Modules 호출
var gulp = 	require('gulp'), // Gulp Module
	concat = require('gulp-concat'), // Gulp JS 병합
	jshint = require('gulp-jshint'), // Gulp JS Hint
	uglify = require('gulp-uglify'), // Gulp uglify 파일 압축
	rename = require('gulp-rename'),  // Gulp Rename
	watch = require('gulp-watch') // Gulp Watch

var path = {
	js : {
		src : 'js/libs/**/*.js',
		dest : 'js/dist/',
		filename : 'index.js'
	}
};

gulp.task('jsScripts', ['js:hint','js:concat','js:uglify']);

// JS Hint
gulp.task('js:hint', function(){
	gulp
		.src(path.js.src)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// JS File Combined
gulp.task('js:concat',function() {
	gulp
		.src(['js/libs/data.js','js/libs/modules.js',path.js.src])
		.pipe(concat(path.js.filename))
		.pipe(gulp.dest(path.js.dest))
});

// JS Uglify
gulp.task('js:uglify', function(){
	gulp
		.src(path.js.src)
		.pipe(uglify())
		.pipe(rename( {suffix: '.min'} ))
		.pipe(gulp.dest(path.js.dest))
});

// Watch
gulp.task('stream', function(){
	gulp
		.watch('js/**/*.js', ['jsScripts'])
});

// Gulp.task()를 사용해 기본(Default) 테스크 정의
gulp.task('default',['stream'], () => {
	// 콘솔(console)에 메시지 기록(Log)
	console.log('gulp default 일이 수행되었습니다.');
});