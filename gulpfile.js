const gulp = require('gulp')
const bs = require('browser-sync')
const sass= require('gulp-sass')

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
        .pipe(bs.stream());
});

gulp.task('server', function () {
    return bs.init({
        server: {
            baseDir: 'src',
            index: 'src/html/case2.html'
        }
    });
});

gulp.task('reload', function () {
    bs.reload();
});

gulp.task('watch', gulp.parallel('server', function () {
    gulp.watch('src/sass/*.scss', gulp.task('sass'));
    gulp.watch('src/html/*.html').on('change', gulp.task('reload'));
    gulp.watch('src/css/*.css').on('change', gulp.task('reload'));
}));
