# Grid
> A vanilla js web component grid based on css grid.

[![Spec Custom Elements V1](https://img.shields.io/badge/spec-custom%20elements%20v1-F52757.svg?style=flat-square)](https://www.w3.org/TR/custom-elements/)
[![Build Status](https://img.shields.io/travis/nuclei/grid/master.svg?style=flat-square)](https://travis-ci.org/nuclei/grid) [![npm](https://img.shields.io/npm/v/@nuclei-components/grid.svg?style=flat-square)](https://www.npmjs.com/package/@nuclei-components/grid)
[![Known Vulnerabilities](https://snyk.io/test/github/nuclei/grid/badge.svg?style=flat-square)](https://snyk.io/test/github/nuclei/grid) [![npm](https://img.shields.io/npm/dt/@nuclei-components/grid.svg?style=flat-square)](https://www.npmjs.com/package/@nuclei-components/grid) [![license](https://img.shields.io/github/license/nuclei/grid.svg?style=flat-square)](https://github.com/nuclei/grid/blob/master/LICENSE)

## Demo
[Grid](https://grid.github.io/grid/index.html)

## Installation
```bash
npm install --save @nuclei-components/grid
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
    <div columns="3" start-column="2">
      Cats are the best.
    </div>
    <div columns="3" rows="s" start-row="3">
      <img src="../media/definitlyNotACatPicture.png" alt="a cat" />
    </div>
</grid-container>
```

## Attributes
### `<grid-container>`
#### gutter
The `gutter` attribute defines the gutter or gap in pixels between the **columns** of the grid. It can either be set to one value e.g. `gutter="10"` (which will translate into a `10px` gap) or to a specific value per breakpoint e.g. `gutter="10s 20m 25l"`.

#### rowgutter
The `rowgutter` attribute defines the gutter or gap in pixels between the **rows** of the grid. It can either be set to a general value e.g. `10` or a specific value per breakpoint e.g. `gutter="10s 20m 25l"` exactly like the `gutter` attribute.

#### columns
The `columns` attribute defines the number of columns in the grid e.g. `columns="12"`. If you want to change the number of columns per breakpoint you can define breakpoint specific sizes by appending the breakpoint to the column number: `columns="1s 2m 6l"`.

#### rows
The `rows` attribute defines the number of rows in the grid e.g. `rows="10"`. If you want to change the number of rows per breakpoint you can define breakpoint specific sizes by appending the breakpoint to the row number: `rows="1s 2m 6l 12xl"`.

#### autoflow
If present, the `autoflow` attribute sets the grid into [`row dense`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) mode which means that the grid tries to fill holes in the grid with items that come later in the order, effectively changing the *visual* order of items.

Setting the attribute to `autoflow="column"` will set the grid into [`column dense`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) mode which means the grid will place items, by filling each column in turn and add new columns if necessary.

When the attribute is not present the default `row` algorithm will be used. Currently there is no way to set the grid to the `column` non-dense algorithm. If you need to do so, you can simply add it via your css by selecting the `grid-container` and adding the css `grid-auto-flow: column;`.

#### size
The `size` attribute is used internally and will be set automatically depending on the current with of the element.

### `grid-container > *` (First-level children of the grid-container)
**Breakpoint specific units**
The following breakpoint specific units are available.
`1s`, `1m`, `1l`

If you set an items `column="4s 2l"` it would mean that this items fills 4 columns for the `s` (and if available `m`) breakpoints and 2 columns for the `l` and bigger.

You may replace the `1` with any number up to the `max-columns` / `max-rows` value.

#### columns
You may specify an integer for the general amount of columns the item should fill and/or any or all of the breakpoint specific units within the `columns` attribute.

#### rows
You may specify an integer for the general amount of rows the item should fill and/or any or all of the breakpoint specific units within the `rows` attribute.

#### start-column
You may specify an integer for the general column the item should start on and/or any or all of the breakpoint specific units.
An item with the attributes `columns="2" start-column="3"` would start on the 2nd column and extend for 3 columns so it would span the 2nd, 3rd and 4th column.

A special 0 value e.g. `0s` is available to reset the offset.

#### start-row
You may specify an integer for the general row the item should start on and/or any or all of the breakpoint specific units.

A special 0 value e.g. `0s` is available to reset the offset.

## Element Queries / Breakpoints
You may defined any or all of the breakpoints. Note that it is advised to use 0 for your lowest breakpoint. The breakpoints are used to create **element queries** meaning that a breakpoint will be activated once the `<grid-container>` (*not the page!*) reaches the specified width. Only the biggest breakpoint will be used.

Breakpoints can be defined per `<grid-container>` using the `breakpoints` attribute. You must provide a space separated list of integers with the size attached, e.g. `600m` for a medium `m` breakpoint that is activated when the element is reaches a `600px` width.

```html
<grid-container breakpoints="0s 600m 1000l">
  // ...
</grid-container>
```

Alternatively you can define common breakpoints for all grids by defining the `breakpoints` property in the `window.nucleiGrid` object. Breakpoints specified via the `breakpoints` attribute always overwrite global breakpoints.

```css
<script type="text/javascript">
  window.nucleiGrid = {
    breakpoints: {
      s: 0,
      m: 800,
      l: 1000
    }
  }
</script>
```

## CSS Variables
CSS variables (custom properties) are used to configure the web component. However this means that most variables need to be available when the custom element is initialised.

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

If you need something more specific you can always just overwrite the `grid-template-columns` and `grid-template-rows` property via your css.

## Events
### sizechange
The `<grid-container>` emits the `sizechange` event when a new breakpoint is reached and the element changes it size. However when the `<grid-container>` has a `max-width` of e.g. `800px` and therefore can not change the `size` to the breakpoint at `1000px`, no event will be fired.

```javascript
event.detail = {
  size: 's', // the new size
  prevSize: 'm', // the previous size^
  pixelBoundary: '600' // the pixel width the element needs to have to reach this breakpoint
}
```

## Limitations
### Max Columns & Rows
The grid can be set to any number of columns & rows, however the `column`, `row` and `start-column`, `start-row` attributes on the grids children will only work up to `24`. Should you have a grid with e.g. 30 rows and want to have an element start on row 26, you would need to add custom css `grid-row-start: 26` targeting this element.

## Tests
By default `npm test` assures you stick to the `standardjs` rules, catches typescript errors and validates your readme using `standard-readme`.

```
$ npm test
```

## Build
Run `npm run build` to convert your source file defined in the `package.json` as `package.config.src` into a compiled js file defined by `package.main`.

### Define your own breakpoints, columns and rows
If you want to use more breakpoints you can simply build the component yourself and specify the number of `columns`, `rows` and the breakpoints you want.

npm test && rollup -c --intro "$(columns=16 rows=10 breakpoints=xs,s,m,l,xl node cssgenerator.js)" && cp -r dist/grid.js docs/grid.js

Make sure to also define the specified breakpoints either per grid or in the `window.nucleiGrid.breakpoints` property.

```
$ npm run build
$ npm run build:watch
```
