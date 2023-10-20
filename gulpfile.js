const gulp =  require('gulp');
const concat =  require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
var deploy = require('gulp-gh-pages');

//process html file 
gulp.task('taskHTML', async() => {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build/'))
})

//process Images folder 
gulp.task('taskIMAGE', async () => {
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('./build/img/'))
})

//process css files
gulp.task('taskCSS', async () => {
    return gulp.src('./src/sass/main.scss')
    .pipe(sass({outputStyled: 'nested'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename('compress.min.css'))
    .pipe(gulp.dest('./build/css/'))
})

//process js files
gulp.task('taskJS', async () => {
    return gulp.src('./src/js/*.js')  
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
})
//gulp deploy
gulp.task('deploy', function () {
    return gulp.src("./build/**/*")
        .pipe(deploy())
});

//watch
gulp.task('watch', async function (){
    gulp.watch('./src/images/', gulp.series('taskIMAGE'));
    gulp.watch('./src/sass/**/*.scss', gulp.series('taskCSS'));
    gulp.watch('./src/js/**/*.js', gulp.series('taskJS'));
    gulp.watch('./src/index.html', gulp.series('taskHTML'));
})
