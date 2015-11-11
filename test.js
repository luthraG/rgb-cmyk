'use strict';
var assert = require('assert');
var rgbCmyk = require('./index.js');

(function test(){
	// Category 1 : Numbers in rgb array
	var cmyk = rgbCmyk([0,0,0]);
	assert.equal(cmyk[0], 0);
	assert.equal(cmyk[1], 0);
	assert.equal(cmyk[2], 0);
	assert.equal(cmyk[3], 1);

	// Category 2 : String in rgb array
	var cmyk = rgbCmyk(['9.3', '0.7', '0.21']);
	assert.equal(cmyk[0], 0);
	assert.equal(cmyk[1], 0.925);
	assert.equal(cmyk[2], 0.977);
	assert.equal(cmyk[3], 0.964);

	// Category 3 : greater than 255
	var cmyk = rgbCmyk([256, 261, 45]);
	assert.equal(cmyk[0], 0);
	assert.equal(cmyk[1], 0);
	assert.equal(cmyk[2], 0.824);
	assert.equal(cmyk[3], 0);

	// Category 4 : less than 0
	var cmyk = rgbCmyk([-251, 13, -39]);
	assert.equal(cmyk[0], 1);
	assert.equal(cmyk[1], 0);
	assert.equal(cmyk[2], 1);
	assert.equal(cmyk[3], 0.949);

})();