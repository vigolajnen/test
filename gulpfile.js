'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const svgo = require('gulp-svgo');
const cheerio = require('gulp-cheerio');
const imagemin = require('gulp-imagemin');
const del = require('del');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const sync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const jsImport = require('gulp-js-import');

const paths = {
  styles: {
    src: 'source/sass/style.scss',
    dest: 'build/css/',
  },
  stylesLibs: {
    src: 'source/sass/libs.scss',
    dest: 'build/css/',
  },
  scripts: {
    src: [
      'source/js/data.js',
      'source/js/modules/api.js',
      'source/js/modules/header.js',
      'source/js/modules/carousel.js',
      'source/js/modules/modal.js',
      'source/js/modules/timer.js',
      'source/js/modules/validate/date.js',
      'source/js/modules/validate/phone.js',
      'source/js/modules/validate/input-words.js',
      'source/js/modules/validate-form.js',
      'source/js/modules/forms.js',
    ],
    dest: 'build/scripts/',
    vendorSrc: [
      './node_modules/swiper/swiper-bundle.min.js',
      './node_modules/aos/dist/aos.js',
      './node_modules/imask/dist/imask.min.js',
    ],
  },
  html: {
    src: 'source/pug/pages/*.pug',
    dest: 'build',
  },
  images: {
    src: 'source/images/**/*.{jpg,jpeg,png,svg}',
    dest: 'build/images/',
  },
  icons: {
    src: 'source/images/icons/*.svg',
    dest: 'build/images/',
  },
};

const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(postcss())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ['last 2 versions'],
      }),
    )
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(csso())
    .pipe(size())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(sync.stream());
};

const stylesLibs = () => {
  return gulp
    .src(paths.stylesLibs.src)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(cleanCSS())
    .pipe(size())
    .pipe(rename('libs.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(sync.stream());
};

const htmlPug = () => {
  return gulp
    .src(paths.html.src)
    .pipe(
      pug({
        pretty: true,
      }),
    )
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(size())
    .pipe(gulp.dest(paths.html.dest));
};

//     .pipe(concat('script.js'))
const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(terser())
    .pipe(uglify())
    .pipe(size())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(sync.stream());
};

const vendorJS = () => {
  return gulp
    .src(paths.scripts.vendorSrc)
    .pipe(terser())
    .pipe(uglify())
    .pipe(size())
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(sync.stream());
};

const optimizeImages = () => {
  return gulp
    .src('source/images/**/*.{png,jpg,svg}')
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.svgo(),
      ]),
    )
    .pipe(gulp.dest('build/images'));
};

const copyImages = () => {
  return gulp
    .src('source/images/**/*.{png,jpg,svg}')
    .pipe(gulp.dest('build/images'));
};

const clean = () => {
  return del('build');
};

const createWebp = () => {
  return gulp
    .src('source/images/**/*.{png,jpg}')
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest('source/images'));
};

const sprite = () => {
  return gulp
    .src(['source/images/icons/*.svg'])
    .pipe(
      svgo({
        plugins: [
          {
            inlineStyles: true,
            minifyStyles: true,
            removeStyleElement: true,
          },
        ],
      }),
    )
    .pipe(
      cheerio({
        run: function($) {
          const defs = Array.from(
            $('defs').map((i, el) => {
              const html = $(el).html();

              $(el).remove();

              return html;
            }),
          ).join('');

          const clipPaths = Array.from(
            $('clipPath').map((i, el) => {
              const html = $.html(el);

              $(el).remove();

              return html;
            }),
          ).join('');

          if (defs.length || clipPaths.length) {
            $('svg').prepend(`<defs>${defs}${clipPaths}</defs>`);
          }
        },
        parserOptions: { xmlMode: true },
      }),
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/images'));
};

const copy = done => {
  return gulp
    .src(
      [
        'source/fonts/**/*.{woff,woff2}',
        'source/*.ico',
        'source/images/**',
        '!source/images/icons/*.svg',
        'source/*.webmanifest',
      ],
      {
        base: 'source',
      },
    )
    .pipe(gulp.dest('build'));
  done();
};

const server = done => {
  sync.init({
    server: {
      baseDir: 'build',
    },
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });
  done();
};

const reload = done => {
  sync.reload();
  done();
};

exports.styles = styles;
exports.stylesLibs = stylesLibs;
exports.htmlPug = htmlPug;
exports.scripts = scripts;
exports.optimizeImages = optimizeImages;
exports.images = copyImages;
exports.clean = clean;
exports.createWebp = createWebp;
exports.sprite = sprite;
exports.copy = copy;
exports.server = server;
exports.reload = reload;

const watcher = () => {
  gulp.watch(
    'source/sass/**/*.{scss,sass}',
    gulp.series('styles', 'stylesLibs'),
  );
  gulp.watch('source/js/**/*.js', gulp.series('scripts'));
  gulp.watch('source/pug/**/**/*.pug', gulp.series('htmlPug', 'reload'));
};

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    stylesLibs,
    htmlPug,
    scripts,
    vendorJS,
    sprite,
    createWebp,
  ),
);
exports.build = build;

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    stylesLibs,
    htmlPug,
    scripts,
    vendorJS,
    sprite,
    createWebp,
  ),
  gulp.series(server, watcher),
);
