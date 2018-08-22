/**
 *
 * index.js
 *
 * FEColor - Change a color based on a filter effect matrix
 *
 */


// ----------------
// Dependencies
// ----------------
const Color = require( 'color' );


/**
 * CheckColor - Check the value is a valid color
 *
 * @param  {string}  color - The color to check if it's valid
 *
 * @return {boolean}       - True or false (if it is a color or not)
 */
const CheckColor = ( color ) => {
	if( color === 'transparent' ) {
		return false;
	}
	try {
		Color( color );
		return true;
	}
	catch( error ) {
		return false;
	}
};


/**
 * CheckMatrix - Check the value is a valid matrix
 *
 * @param  {array}  matrix - The matrix to multiply the colour values by
 *
 * @return {boolean}       - True or false (if it is a matrix or not)
 */
const CheckMatrix = ( matrix ) => {
	// Check that the matrix has 20 values
	if( matrix.length !== 20 ) {
		return false;
	}

	// Check that all values are between 0 and 1
	let validMinMax = true;
	matrix.forEach( ( value ) => {
		if( value < 0 || value > 1 ) {
			validMinMax = false;
		}
	});

	return validMinMax;
};


/**
 * ChunkArray - Returns an array with arrays of the given size.
 *
 * @param {array}  arrayToSplit -  Array to split
 * @param {number} chunkSize    -  Size of every group
 *
 * @returns {array}             - Array in chunks
 */
const ChunkArray = ( arrayToSplit, chunkSize ) => {
	const results = [];

	while( arrayToSplit.length ) {
		results.push( arrayToSplit.splice( 0, chunkSize ) );
	}

	return results;
};


/**
 * FEColor - Change a color based on a filter effect matrix
 *
 * http://alistapart.com/article/finessing-fecolormatrix
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
 *
 * @param  {string} color  - The color to be manipulated by the filter
 * @param  {array}  matrix - The filter to transform the color
 *
 * @return {string}        - The transformed color
 */
const FEColor = ( color, matrix ) => {
	if( color === undefined || !CheckColor( color ) ) {
		throw new Error( 'The color must be a valid CSS colour' );
	}

	if( matrix === undefined || !CheckMatrix( matrix ) ) {
		throw new Error( 'The matrix must be a valid feFEColor' );
	}

	// An array of the current color R, G, B, A
	const colorRGBA = [ ...Color( color ).color, Color( color ).alpha() ];

	// The color matrix split into R, G, B, A, Multiplier
	const matrixRGBA = ChunkArray( matrix, 5 );

	// The result of the transformation
	const newColor = [ 0, 0, 0, 0 ];

	// Transform the color
	matrixRGBA.forEach( ( value, i ) => {
		colorRGBA.forEach( ( rgbaValue, j ) => {
			newColor[ i ] += rgbaValue * value[ j ];
		});
	});

	return Color.rgb( newColor ).hex();
};

module.exports = FEColor;
