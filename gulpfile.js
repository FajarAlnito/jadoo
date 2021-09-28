const {watch, series, src, dest} = require("gulp");
const browserSync = require("browser-sync").create();
const htmlmin = require('gulp-htmlmin');
const postcss = require("gulp-postcss");
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");
const minify = require("gulp-minify");

// Task for minifying html file
function htmlminTask (cb) {
  src("./src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
  cb();
}

// Task for compiling CSS files 
function styleTask (cb) {
  src("./src/sass/app.scss")
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest("./src/dist/css"))
    .pipe(postcss())
    .pipe(dest("./public/css"));
  cb();
}

// Task for compiling JS files
function jsTask (cb) {
  src("./src/js/*.js")
    .pipe(minify())
    .pipe(dest('./public/js'))
    .pipe(browserSync.stream());
  cb();
}

// Task for minifying images
function imageminTask (cb) {
  src("./src/images/**")
    .pipe(imagemin())
    .pipe(dest("./public/images"));
  cb();
}

// Serve from browserSync server
function browsersyncServe (cb) {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
  cb();
}

function browsersyncReload (cb) {
  browserSync.reload();
  cb();
}

// Watch Files & Reload browser after tasks
function watchTask () {
  watch("./src/*.html", series(htmlminTask, styleTask, browsersyncReload));
  watch("./src/sass/*.scss", series(styleTask, browsersyncReload));
  watch("./src/js/*js", series(jsTask, browsersyncReload));
  watch("./src/images", series(imageminTask));
}

// Default Gulp Task
exports.default = series(
  htmlminTask,
  styleTask,
  jsTask,
  imageminTask,
  browsersyncServe,
  watchTask
);
