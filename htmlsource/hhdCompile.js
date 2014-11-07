var UglifyJS = require('uglify-js');
var fs = require('fs');
var result = UglifyJS.minify(
[ '../hhdRails/app/assets/javascripts/jquery.js',
'../hhdRails/app/assets/javascripts/jquery-ui.js',
'../hhdRails/app/assets/javascripts/jquery-migrate-1.2.1.js',
'../hhdRails/app/assets/javascripts/jquery.mousewheel.js',
'../hhdRails/app/assets/javascripts/jquery.mobile.customized.min.js',
'../hhdRails/app/assets/javascripts/jquery.easing.1.3.js',
'../hhdRails/app/assets/javascripts/camera.js',
'../hhdRails/app/assets/javascripts/jquery.kwicks.js',
'../hhdRails/app/assets/javascripts/video.js',
'../hhdRails/app/assets/javascripts/main.js'
],
{
mangle: true,
outSourceMap: "src/javascripts/out.js.map"
});
// console.log(result.code);
fs.writeFileSync('src/javascripts/main.min.js', result.code);
fs.writeFileSync('src/javascripts/main.js.map', result.map);