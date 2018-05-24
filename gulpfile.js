var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src("/app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('/app/css/*.css'))
});

gulp.task('watch', function() {
    gulp.watch('/app/scss/*.scss', ['sass']);
    // Other watchers
})