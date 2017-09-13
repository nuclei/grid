# Grid
> A vanilla js web component grid based on css grid.

[![Spec Custom Elements V1](https://img.shields.io/badge/spec-custom%20elements%20v1-F52757.svg?style=flat-square)](https://www.w3.org/TR/custom-elements/)
[![Build Status](https://img.shields.io/travis/nuclei/grid/master.svg?style=flat-square)](https://travis-ci.org/nuclei/grid) [![npm](https://img.shields.io/npm/v/nuclei-grid.svg?style=flat-square)](https://www.npmjs.com/package/nuclei-grid)
[![Known Vulnerabilities](https://snyk.io/test/github/nuclei/grid/badge.svg?style=flat-square)](https://snyk.io/test/github/nuclei/grid) [![npm](https://img.shields.io/npm/dt/nuclei-grid.svg?style=flat-square)](https://www.npmjs.com/package/nuclei-grid) [![license](https://img.shields.io/github/license/nuclei/grid.svg?style=flat-square)](https://github.com/nuclei/grid/blob/master/LICENSE)

## Demo
[Grid](https://grid.github.io/grid/index.html)

## Installation
```bash
npm install --save grid????
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
