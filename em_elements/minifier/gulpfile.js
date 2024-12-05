const { src, dest,watch,series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const cleanCSS = require('gulp-clean-css');
const ver = "v1";
const version ="-"+ver+".0.76";
const destUrl = '../../../em-cdn/js-sdk/';

function minifyCheckout() {
  return src('../'+ver+'/checkout.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(javascriptObfuscator())
    .pipe(rename({ extname: version+'.min.js' }))
    .pipe(dest(destUrl+ver+"/"));
}
function minifyOtherJs() {
    return src('../'+ver+'/js/*')
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat('main'+version+'.min.js')) 
      .pipe(javascriptObfuscator())
      .pipe(dest(destUrl+ver+'/js/'));
  }

  function minifyCSS() {
    return src('../v1/css/*')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(concat('main'+version+'.min.css')) 
      .pipe(dest(destUrl+ver+'/css/'));
  }
function watchTask() {
    watch('../'+ver+'/checkout.js',minifyCheckout);
    watch('../'+ver+'/css/*', minifyCSS );
   
}

exports.default = series(minifyCheckout,minifyOtherJs,minifyCSS,watchTask);