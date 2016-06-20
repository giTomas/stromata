const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
// const nodemon      = require('gulp-nodemon');

/*gulp.task( 'start', function () {
  nodemon({
    script: 'server.js',
    ext: 'js css pug',
    env: { 'NODE_ENV': 'development' }
  })
});*/

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass({
            includePaths: ['css']
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('public/css'))
        .pipe(gulp.dest('sass'));
});

gulp.task('watch', function(){
  gulp.watch('sass/**', ['sass'])
});

gulp.task('default', ['watch']);
