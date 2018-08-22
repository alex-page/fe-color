🎨 Filter effects color   [![Build Status](https://travis-ci.org/alex-page/fe-color.svg?branch=master)](https://travis-ci.org/alex-page/fe-color)
==============

> Change a color based on a filter effect matrix


## Install

```console
$ npm install fe-color
```

## Usage

```js
const FEColor = require( 'fe-color' );

FEColor( 
  'red', 
  [ 
    0.567, 0.433, 0, 0, 0,
    0.558, 0.442, 0, 0, 0,
    0, 0.242, 0.758, 0, 0,
    0, 0, 0, 1, 0,
	]
); // This returns #918E00
```


## Parameters

The function `FEColor` function takes two parameters:

```js
FEColor( $color, $matrix );
```

1. `color`  - The color to be manipulated by the filter
1. `matrix` - The filter to transform the color


## Research

Fundamentals from [feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) and [Finessing feColorMatrix](https://alistapart.com/article/finessing-fecolormatrix).


## Release History

* v1.0.0 - First release
