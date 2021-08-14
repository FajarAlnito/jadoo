const {watch, series, src, dest} = require("gulp");
const browserSync = require("browser-sync").create();
const htmlmin = require('gulp-htmlmin');
const postcss = require("gulp-postcss");
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

// Task for compiling CSS files using PostCSS
function cssTask (cb) {
  src("./src/css/*.css")
    .pipe(postcss().on('error', console.log))
    .pipe(dest("./public/css"))
    .pipe(browserSync.stream());
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
  watch("./src/*.html", series(htmlminTask, cssTask, browsersyncReload));
  watch("./src/css/*.css", series(cssTask, browsersyncReload));
  watch("./src/js/*js", series(jsTask, browsersyncReload));
  watch("./src/images", series(imageminTask));
}

// Default Gulp Task
exports.default = series(
  htmlminTask,
  cssTask,
  jsTask,
  imageminTask,
  browsersyncServe,
  watchTask
);
