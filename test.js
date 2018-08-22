/**
 *
 * index.js unit tests
 *
 * @file index.js
 *
 * Tested methods:
 * - FEColor
 * - CheckColor
 * - CheckMatrix
 *
 */


// -----
// Local
// -----
import test from 'ava';
import FEColor from '.';


const matrix = {
	protanopia: [
		0.567, 0.433, 0, 0, 0,
		0.558, 0.442, 0, 0, 0,
		0, 0.242, 0.758, 0, 0,
		0, 0, 0, 1, 0,
	],
	protanomaly: [
		0.817, 0.183, 0, 0, 0,
		0.333, 0.667, 0, 0, 0,
		0, 0.125, 0.875, 0, 0,
		0, 0, 0, 1, 0,
	],
	deuteranopia: [
		0.625, 0.375, 0, 0, 0,
		0.7, 0.3, 0, 0, 0,
		0, 0.3, 0.7, 0, 0,
		0, 0, 0, 1, 0,
	],
	deuteranomaly: [
		0.8, 0.2, 0, 0, 0,
		0.258, 0.742, 0, 0, 0,
		0, 0.142, 0.858, 0, 0,
		0, 0, 0, 1, 0,
	],
	tritanopia: [
		0.95, 0.05, 0, 0, 0,
		0, 0.433, 0.567, 0, 0,
		0, 0.475, 0.525, 0, 0,
		0, 0, 0, 1, 0,
	],
	tritanomaly: [
		0.967, 0.033, 0, 0,
		0, 0, 0.733, 0.267, 0,
		0, 0, 0.183, 0.817, 0,
		0, 0, 0, 0, 1, 0,
	],
	achromatopsia: [
		0.299, 0.587, 0.114, 0, 0,
		0.299, 0.587, 0.114, 0, 0,
		0.299, 0.587, 0.114, 0, 0,
		0, 0, 0, 1, 0,
	],
	achromatomaly: [
		0.618, 0.320, 0.062, 0, 0,
		0.163, 0.775, 0.062, 0, 0,
		0.163, 0.320, 0.516, 0, 0,
		0, 0, 0, 1, 0,
	],
	blackout: [
		0, 0, 0, 0, 0,
		0, 0, 0, 0, 0,
		0, 0, 0, 0, 0,
		0, 0, 0, 0, 0,
	],
};


/*
 * FEColor
 */
test( 'FEColor: should transform valid colors', ( t ) => {
	t.is( FEColor( 'red', matrix.protanopia ), '#918E00' );
	t.is( FEColor( 'rebeccapurple', matrix.protanomaly ), '#5D448C' );
	t.is( FEColor( '#c0c0c0', matrix.deuteranopia ), '#C0C0C0' );
	t.is( FEColor( '#111', matrix.deuteranomaly ), '#111111' );
	t.is( FEColor( 'rgba( 0, 0, 0, 1 )', matrix.tritanomaly ), '#000000' );
	t.is( FEColor( 'rgb( 100%, 0%, 0% )', matrix.tritanopia ), '#F20000' );
	t.is( FEColor( 'rgba( 100%, 90%, 0%, 0.9 )', matrix.achromatopsia ), '#D3D3D3' );
	t.is( FEColor( 'hsla( 120, 100%, 50%, 0.9 )', matrix.achromatomaly ), '#6D644D' );
	t.is( FEColor( 'hsl( 120, 100%, 50% )', matrix.blackout ), '#000000' );
});


/*
 * CheckColor
 */
test( 'FEColor: should throw error if color is invalid', ( t ) => {
	t.throws( () => FEColor( 'transparent', [] ) );
	t.throws( () => FEColor( '890u091u0u', [] ) );
	t.throws( () => FEColor( '#1', [] ) );
	t.throws( () => FEColor( 'reeed', [] ) );
	t.throws( () => FEColor( '#11', [] ) );
	t.throws( () => FEColor( '#11111', [] ) );
	t.throws( () => FEColor( '#1zxy', [] ) );
	t.throws( () => FEColor( 'rgba( 100%, 90%, 0%, 100% )', [] ) );
	t.throws( () => FEColor( 'hsla( 120, 100%, 50%, 100% )', [] ) );
});


/*
 * CheckMatrix
 */
test( 'FEColor: should throw error if matrix is invalid', ( t ) => {
	t.throws( () => FEColor( 'red', [] ) );
	t.throws( () => FEColor( 'red', [ 1, 2, 3 ] ) );
	t.throws( () => FEColor( 'red', [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ] ) );
	t.throws( () => FEColor( 'red', [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 2 ] ) );
	t.throws( () => FEColor( 'red', [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0 ] ) );
	t.throws( () => FEColor( 'red', 'abcdefghijklmnop' ) );
	t.throws( () => FEColor( 'red', undefined ) );
});
