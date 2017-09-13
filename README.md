# Grid
> A vanilla js web component grid based on css grid.

[![Spec Custom Elements V1](https://img.shields.io/badge/spec-custom%20elements%20v1-F52757.svg?style=flat-square)](https://www.w3.org/TR/custom-elements/)
[![Build Status](https://img.shields.io/travis/nuclei/grid/master.svg?style=flat-square)](https://travis-ci.org/nuclei/grid) [![npm](https://img.shields.io/npm/v/nuclei-grid.svg?style=flat-square)](https://www.npmjs.com/package/nuclei-grid)
[![Known Vulnerabilities](https://snyk.io/test/github/nuclei/grid/badge.svg?style=flat-square)](https://snyk.io/test/github/nuclei/grid) [![npm](https://img.shields.io/npm/dt/nuclei-grid.svg?style=flat-square)](https://www.npmjs.com/package/nuclei-grid) [![license](https://img.shields.io/github/license/nuclei/grid.svg?style=flat-square)](https://github.com/nuclei/grid/blob/master/LICENSE)

## Demo
[Grid](https://grid.github.io/grid/index.html)

## Installation
Make sure to use the correct package name: `nuclei-grid`.

```bash
npm install --save nuclei-grid
```

As the support for web components is currently still pretty spotty, you probably want to load a polyfill before loading the web component.

I recommend the [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs). To make sure the webcomponent is only loaded once the polyfill is done (when using the `webcomponents-loader.js`) you will want to wait for the `WebComponentsReady` event before loading the web component. This event is always fired, even in browser that fully support web components.

```html
<script type="text/javascript" async>
  window.addEventListener('WebComponentsReady', function () {
    let script = document.createElement('script')
    script.setAttribute('src', '../dist/grid.js')
    document.head.appendChild(script)
  })
</script>
```

## Usage

Simply add a `<grid-container>` element to your page. All first level children of this element are now within the grid and can be controlled using the attributes specified below.

```html
<grid-container>
    <div column="3">
      Cats are the best.
    </div>
    <div column="3">
      <img src="../media/definitlyNotACatPicture.png" alt="a cat" />
    </div>
</grid-container>
```

## Attributes
### `<grid-container>`
#### gutter
The `gutter` attribute defines the gutter or gap between the columns and rows of the cells in the grid. They can be set to any valid `length` or `percentage` value, see [grid-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap).

#### rowgutter
The `rowgutter` attribute defines the gutter or gap between the rows of the grid. They are useful when you want to have different values for the row and column gutter and can be set to any valid `length` or `percentage` value, see [grid-row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap).

#### columns
> coming soon
#### rows
> coming soon

#### autoflow
If present, the `autoflow` attribute sets the grid into [`row dense`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) mode which means that the grid tries to fill holes in the grid with items that come later in the order, effectively changing the *visual* order of items.

Setting the attribute to `autoflow="column"` will set the grid into [`column dense`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) mode which means the grid will place items, by filling each column in turn and add new columns if necessary.

When the attribute is not present the default `row` algorithm will be used. Currently there is no way to set the grid to the `column` non-dense algorithm. If you need to do so, you can simply add it via your css by selecting the `grid-container` and adding the css `grid-auto-flow: column;`.

### `grid-container > *` (First-level children of the grid-container)
**Breakpoint specific units**
The following breakpoint specific units are available.
`1xs`, `1s`, `1m`, `1l`, `1xl`, `1xxl`

If you set an items `column="4xs 2m"` it would mean that this items fills 4 columns for the `xs` (and if available `s`) breakpoints and 2 columns for the `m` and bigger.

You may replace the `1` with any number up to the `max-columns` / `max-rows` value.

#### column
You may specify an integer for the general amount of columns the item should fill and/or any or all of the breakpoint specific units.

#### row
You may specify an integer for the general amount of rows the item should fill and/or any or all of the breakpoint specific units.

#### start-column
You may specify an integer for the general column the item should start on and/or any or all of the breakpoint specific units.
An item with the attributes `column="2" start-column="3"` would start on the 2nd column and extend for 3 columns so it would span the 2nd, 3rd and 4th column.

A special 0 value e.g. `0xs` is available to reset the offset.

#### start-row
You may specify an integer for the general row the item should start on and/or any or all of the breakpoint specific units.

A special 0 value e.g. `0xs` is available to reset the offset.

## CSS Variables
CSS variables (custom properties) are used to configure the web component. However this means that most variables need to be available when the custom element is initialised.

### Breakpoints
You may defined any or all of the following breakpoints. Note that it is advised to use 0 for your lowest breakpoint. The breakpoints will be used to create media queries with a `min-width` of the breakpoint.

```css
:root{
  --grid-breakpoint-xs: 0;
  --grid-breakpoint-s: 600px;
  --grid-breakpoint-m: 800px;
  --grid-breakpoint-l: 1000px;
  --grid-breakpoint-xl: 1200px;
  --grid-breakpoint-xxl: 1400px;
}
```

### Gutters
If you need your gutters to change depending on the breakpoint you can specify the `--grid-gutter` and `--grid-row-gutter` variable within a media query.

```css
:root{
  --grid-gutter: 10px;
  --grid-row-gutter: 10px;
}
@media (min-width: 800px){
  :root{
    --grid-gutter: 20px;
    --grid-row-gutter: 10px;
  }
}
```

### Columns & Rows
If you don't want to set your rows and columns via the attributes you can use the css variables `--grid-columns` and `--grid-rows`. You can either change them inside your media queries or you can define them for specific sizes, e.g. `--grid-columns-m`.

### Max Columns
By default the grid can have a maximum of 16 columns. Should you ever have the need for a grid with more columns, you can simply set the `--grid-max-columns: 24;` css variable.

If you are using grids with 16 or less columns you do not need to change anything. Note that the grid will work fine, even when it has more than the defined max-columns columns, however when a cell has a `column` or `start-column` attribute specifying a value outside of the max-columns range it will not work.

### Tests
By default `npm test` assures you stick to the `standardjs` rules, catches typescript errors and validates your readme using `standard-readme`.

```
$ npm test
```

### Build
Run `npm run build` to convert your source file defined in the `package.json` as `package.config.src` into a compiled js file defined by `package.main`.

```
$ npm run build
$ npm run build:watch
```
