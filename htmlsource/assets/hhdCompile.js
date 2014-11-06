var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify(
[   'javascripts/jquery.js',
	'javascripts/jquery-ui.js',
	'javascripts/jquery-migrate-1.2.1.js',
	'javascripts/jquery.mousewheel.js',
	'javascripts/jquery.mobile.customized.min.js',
	'javascripts/jquery.easing.1.3.js',
	'javascripts/camera.js',
	'javascripts/jquery.kwicks.js',			
	'javascripts/video.js',
	'javascripts/main.js'
],
 {
	mangle: true,
	outSourceMap: "../src/javascripts/out.js.map"
});
// console.log(result.code);
fs.writeFileSync('../src/javascripts/main.min.js', result.code);
fs.writeFileSync('../src/javascripts/main.js.map', result.map);