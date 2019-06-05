/**
 * @file index.js
 *
 * Tested methods:
 * - feColor
 */

// -----
// Local
// -----
const test = require('ava');
const feColor = require('.');

const matrix = {
	protanopia: [
		0.567,
		0.433,
		0,
		0,
		0,
		0.558,
		0.442,
		0,
		0,
		0,
		0,
		0.242,
		0.758,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	protanomaly: [
		0.817,
		0.183,
		0,
		0,
		0,
		0.333,
		0.667,
		0,
		0,
		0,
		0,
		0.125,
		0.875,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	deuteranopia: [
		0.625,
		0.375,
		0,
		0,
		0,
		0.7,
		0.3,
		0,
		0,
		0,
		0,
		0.3,
		0.7,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	deuteranomaly: [
		0.8,
		0.2,
		0,
		0,
		0,
		0.258,
		0.742,
		0,
		0,
		0,
		0,
		0.142,
		0.858,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	tritanopia: [
		0.95,
		0.05,
		0,
		0,
		0,
		0,
		0.433,
		0.567,
		0,
		0,
		0,
		0.475,
		0.525,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	tritanomaly: [
		0.967,
		0.033,
		0,
		0,
		0,
		0,
		0.733,
		0.267,
		0,
		0,
		0,
		0.183,
		0.817,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	achromatopsia: [
		0.299,
		0.587,
		0.114,
		0,
		0,
		0.299,
		0.587,
		0.114,
		0,
		0,
		0.299,
		0.587,
		0.114,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	achromatomaly: [
		0.618,
		0.320,
		0.062,
		0,
		0,
		0.163,
		0.775,
		0.062,
		0,
		0,
		0.163,
		0.320,
		0.516,
		0,
		0,
		0,
		0,
		0,
		1,
		0
	],
	blackout: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	]
};

/*
 * FeColor
 */
test('feColor: should transform valid colors', t => {
	t.is(feColor('red', matrix.protanopia), '#918E00');
	t.is(feColor('rebeccapurple', matrix.protanomaly), '#5D448C');
	t.is(feColor('#c0c0c0', matrix.deuteranopia), '#C0C0C0');
	t.is(feColor('#111', matrix.deuteranomaly), '#111111');
	t.is(feColor('rgba( 0, 0, 0, 1 )', matrix.tritanomaly), '#000000');
	t.is(feColor('rgb( 100%, 0%, 0% )', matrix.tritanopia), '#F20000');
	t.is(feColor('rgba( 100%, 90%, 0%, 0.9 )', matrix.achromatopsia), '#D3D3D3');
	t.is(feColor('hsla( 120, 100%, 50%, 0.9 )', matrix.achromatomaly), '#6D644D');
	t.is(feColor('hsl( 120, 100%, 50% )', matrix.blackout), '#000000');
});

/*
 * CheckColor
 */
test('feColor: should throw error if color is invalid', t => {
	t.throws(() => feColor('transparent', []));
	t.throws(() => feColor('890u091u0u', []));
	t.throws(() => feColor('#1', []));
	t.throws(() => feColor('reeed', []));
	t.throws(() => feColor('#11', []));
	t.throws(() => feColor('#11111', []));
	t.throws(() => feColor('#1zxy', []));
	t.throws(() => feColor('rgba( 100%, 90%, 0%, 100% )', []));
	t.throws(() => feColor('hsla( 120, 100%, 50%, 100% )', []));
});

/*
 * CheckMatrix
 */
test('feColor: should throw error if matrix is invalid', t => {
	t.throws(() => feColor('red', []));
	t.throws(() => feColor('red', [1, 2, 3]));
	t.throws(() => feColor('red', [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
	t.throws(() => feColor('red', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 2]));
	t.throws(() => feColor('red', [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0]));
	t.throws(() => feColor('red', 'abcdefghijklmnop'));
	t.throws(() => feColor('red', undefined));
});
