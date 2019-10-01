🎨 Filter effects color
==============

> Change a color based on a filter effect matrix


## Install

```console
$ npm install fe-color
```

## Usage

```js
const feColor = require( 'fe-color' );

feColor( 
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

The function `feColor` function takes two parameters:

```js
feColor( $color, $matrix );
```

1. `color`  - The color to be manipulated by the filter
1. `matrix` - The filter to transform the color


## Research

Fundamentals from [feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) and [Finessing feColorMatrix](https://alistapart.com/article/finessing-fecolormatrix).


## Release History

* v1.0.7 - Update dependencies and GitHub actions to yml
* v1.0.6 - Update dependencies
* v1.0.5 - `xo` is a dev dependency
* v1.0.4 - Replace `eslint` with `xo`
* v1.0.3 - Use files instead of `.npmignore`
* v1.0.2 - Remove `prepublishOnly` script
* v1.0.1 - Replace travis with GitHub actions
* v1.0.0 - First release
