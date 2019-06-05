/**
 * Change a color based on a filter effect matrix
 */

// Dependencies
const color = require('color');

/**
 * Check the value is a valid color
 *
 * @param  {string}  colorValue - The color to check if it's valid
 *
 * @return {boolean}            - True or false (if it is a color or not)
 */
const checkColor = colorValue => {
	if (colorValue === 'transparent') {
		return false;
	}

	try {
		color(colorValue);
		return true;
	} catch (error) {
		return false;
	}
};

/**
 * Check the value is a valid matrix
 *
 * @param  {array}  matrix - The matrix to multiply the colour values by
 *
 * @return {boolean}       - True or false (if it is a matrix or not)
 */
const checkMatrix = matrix => {
	// Check that the matrix has 20 values
	if (matrix.length !== 20) {
		return false;
	}

	// Check that all values are between 0 and 1
	let validMinMax = true;
	matrix.forEach(value => {
		if (value < 0 || value > 1) {
			validMinMax = false;
		}
	});

	return validMinMax;
};

/**
 * Change a color based on a filter effect matrix
 *
 * http://alistapart.com/article/finessing-fecolormatrix
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
 *
 * @param  {string} colorValue  - The color to be manipulated by the filter
 * @param  {array}  matrix - The filter to transform the color
 *
 * @return {string}        - The transformed color
 */
const feColor = (colorValue, matrix) => {
	if (colorValue === undefined || !checkColor(colorValue)) {
		throw new Error('The color must be a valid CSS colour');
	}

	if (matrix === undefined || !checkMatrix(matrix)) {
		throw new Error('The matrix must be a valid fefeColor');
	}

	// An array of the current color R, G, B, A
	const colorRGBA = [...color(colorValue).color, color(colorValue).alpha()];

	// The color matrix split into R, G, B, A, Multiplier
	const matrixRGBA = [];

	while (matrix.length) {
		matrixRGBA.push(matrix.splice(0, 5));
	}

	// The result of the transformation
	const newColor = [0, 0, 0, 0];

	// Transform the color
	matrixRGBA.forEach((value, i) => {
		colorRGBA.forEach((rgbaValue, j) => {
			newColor[i] += rgbaValue * value[j];
		});
	});

	return color.rgb(newColor).hex();
};

module.exports = feColor;
