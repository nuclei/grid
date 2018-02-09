(function () {
'use strict';

let style = `:host{
  display: grid;
  width: 100%;
  grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
  grid-template-rows: repeat(var(--grid-rows, none), 1fr);
  grid-column-gap: var(--grid-gutter, 0);
  grid-row-gap: var(--grid-row-gutter, 0);
}
:host([size="s"]){
    grid-template-columns: repeat(var(--grid-columns-s, var(--grid-columns, auto-fill)), 1fr);
    grid-template-rows: repeat(var(--grid-rows-s, var(--grid-rows, none)), 1fr);
    grid-column-gap: var(--grid-gutter-s, var(--grid-gutter, 0));
    grid-row-gap: var(--grid-row-gutter-s, var(--grid-row-gutter, 0));
  }
:host([size="m"]){
    grid-template-columns: repeat(var(--grid-columns-m, var(--grid-columns, auto-fill)), 1fr);
    grid-template-rows: repeat(var(--grid-rows-m, var(--grid-rows, none)), 1fr);
    grid-column-gap: var(--grid-gutter-m, var(--grid-gutter, 0));
    grid-row-gap: var(--grid-row-gutter-m, var(--grid-row-gutter, 0));
  }
:host([size="l"]){
    grid-template-columns: repeat(var(--grid-columns-l, var(--grid-columns, auto-fill)), 1fr);
    grid-template-rows: repeat(var(--grid-rows-l, var(--grid-rows, none)), 1fr);
    grid-column-gap: var(--grid-gutter-l, var(--grid-gutter, 0));
    grid-row-gap: var(--grid-row-gutter-l, var(--grid-row-gutter, 0));
  }

:host([autoflow]){
  grid-auto-flow: row dense;
}
:host([autoflow=column]){
  grid-auto-flow: column dense;
}
/* columns no unit */
::slotted([columns~="1"]){  --column-end:    span 1; }
::slotted([columns~="1s"]){ --column-end-s:  span 1; }
::slotted([columns~="1m"]){ --column-end-m:  span 1; }
::slotted([columns~="1l"]){ --column-end-l:  span 1; }
::slotted([columns~="2"]){  --column-end:    span 2; }
::slotted([columns~="2s"]){ --column-end-s:  span 2; }
::slotted([columns~="2m"]){ --column-end-m:  span 2; }
::slotted([columns~="2l"]){ --column-end-l:  span 2; }
::slotted([columns~="3"]){  --column-end:    span 3; }
::slotted([columns~="3s"]){ --column-end-s:  span 3; }
::slotted([columns~="3m"]){ --column-end-m:  span 3; }
::slotted([columns~="3l"]){ --column-end-l:  span 3; }
::slotted([columns~="4"]){  --column-end:    span 4; }
::slotted([columns~="4s"]){ --column-end-s:  span 4; }
::slotted([columns~="4m"]){ --column-end-m:  span 4; }
::slotted([columns~="4l"]){ --column-end-l:  span 4; }
::slotted([columns~="5"]){  --column-end:    span 5; }
::slotted([columns~="5s"]){ --column-end-s:  span 5; }
::slotted([columns~="5m"]){ --column-end-m:  span 5; }
::slotted([columns~="5l"]){ --column-end-l:  span 5; }
::slotted([columns~="6"]){  --column-end:    span 6; }
::slotted([columns~="6s"]){ --column-end-s:  span 6; }
::slotted([columns~="6m"]){ --column-end-m:  span 6; }
::slotted([columns~="6l"]){ --column-end-l:  span 6; }
::slotted([columns~="7"]){  --column-end:    span 7; }
::slotted([columns~="7s"]){ --column-end-s:  span 7; }
::slotted([columns~="7m"]){ --column-end-m:  span 7; }
::slotted([columns~="7l"]){ --column-end-l:  span 7; }
::slotted([columns~="8"]){  --column-end:    span 8; }
::slotted([columns~="8s"]){ --column-end-s:  span 8; }
::slotted([columns~="8m"]){ --column-end-m:  span 8; }
::slotted([columns~="8l"]){ --column-end-l:  span 8; }
::slotted([columns~="9"]){  --column-end:    span 9; }
::slotted([columns~="9s"]){ --column-end-s:  span 9; }
::slotted([columns~="9m"]){ --column-end-m:  span 9; }
::slotted([columns~="9l"]){ --column-end-l:  span 9; }
::slotted([columns~="10"]){  --column-end:   span 10; }
::slotted([columns~="10s"]){ --column-end-s: span 10; }
::slotted([columns~="10m"]){ --column-end-m: span 10; }
::slotted([columns~="10l"]){ --column-end-l: span 10; }
::slotted([columns~="11"]){  --column-end:   span 11; }
::slotted([columns~="11s"]){ --column-end-s: span 11; }
::slotted([columns~="11m"]){ --column-end-m: span 11; }
::slotted([columns~="11l"]){ --column-end-l: span 11; }
::slotted([columns~="12"]){  --column-end:   span 12; }
::slotted([columns~="12s"]){ --column-end-s: span 12; }
::slotted([columns~="12m"]){ --column-end-m: span 12; }
::slotted([columns~="12l"]){ --column-end-l: span 12; }
::slotted([columns~="13"]){  --column-end:   span 13; }
::slotted([columns~="13s"]){ --column-end-s: span 13; }
::slotted([columns~="13m"]){ --column-end-m: span 13; }
::slotted([columns~="13l"]){ --column-end-l: span 13; }
::slotted([columns~="14"]){  --column-end:   span 14; }
::slotted([columns~="14s"]){ --column-end-s: span 14; }
::slotted([columns~="14m"]){ --column-end-m: span 14; }
::slotted([columns~="14l"]){ --column-end-l: span 14; }
::slotted([columns~="15"]){  --column-end:   span 15; }
::slotted([columns~="15s"]){ --column-end-s: span 15; }
::slotted([columns~="15m"]){ --column-end-m: span 15; }
::slotted([columns~="15l"]){ --column-end-l: span 15; }
::slotted([columns~="16"]){  --column-end:   span 16; }
::slotted([columns~="16s"]){ --column-end-s: span 16; }
::slotted([columns~="16m"]){ --column-end-m: span 16; }
::slotted([columns~="16l"]){ --column-end-l: span 16; }

::slotted([start-column~="1"]){  --column-start: 1; }
::slotted([start-column~="1s"]){ --column-start-s: 1; }
::slotted([start-column~="1m"]){ --column-start-m: 1; }
::slotted([start-column~="1l"]){ --column-start-l: 1; }
::slotted([start-column~="2"]){  --column-start: 2; }
::slotted([start-column~="2s"]){ --column-start-s: 2; }
::slotted([start-column~="2m"]){ --column-start-m: 2; }
::slotted([start-column~="2l"]){ --column-start-l: 2; }
::slotted([start-column~="3"]){  --column-start: 3; }
::slotted([start-column~="3s"]){ --column-start-s: 3; }
::slotted([start-column~="3m"]){ --column-start-m: 3; }
::slotted([start-column~="3l"]){ --column-start-l: 3; }
::slotted([start-column~="4"]){  --column-start: 4; }
::slotted([start-column~="4s"]){ --column-start-s: 4; }
::slotted([start-column~="4m"]){ --column-start-m: 4; }
::slotted([start-column~="4l"]){ --column-start-l: 4; }
::slotted([start-column~="5"]){  --column-start: 5; }
::slotted([start-column~="5s"]){ --column-start-s: 5; }
::slotted([start-column~="5m"]){ --column-start-m: 5; }
::slotted([start-column~="5l"]){ --column-start-l: 5; }
::slotted([start-column~="6"]){  --column-start: 6; }
::slotted([start-column~="6s"]){ --column-start-s: 6; }
::slotted([start-column~="6m"]){ --column-start-m: 6; }
::slotted([start-column~="6l"]){ --column-start-l: 6; }
::slotted([start-column~="7"]){  --column-start: 7; }
::slotted([start-column~="7s"]){ --column-start-s: 7; }
::slotted([start-column~="7m"]){ --column-start-m: 7; }
::slotted([start-column~="7l"]){ --column-start-l: 7; }
::slotted([start-column~="8"]){  --column-start: 8; }
::slotted([start-column~="8s"]){ --column-start-s: 8; }
::slotted([start-column~="8m"]){ --column-start-m: 8; }
::slotted([start-column~="8l"]){ --column-start-l: 8; }
::slotted([start-column~="9"]){  --column-start: 9; }
::slotted([start-column~="9s"]){ --column-start-s: 9; }
::slotted([start-column~="9m"]){ --column-start-m: 9; }
::slotted([start-column~="9l"]){ --column-start-l: 9; }
::slotted([start-column~="10"]){  --column-start: 10; }
::slotted([start-column~="10s"]){ --column-start-s: 10; }
::slotted([start-column~="10m"]){ --column-start-m: 10; }
::slotted([start-column~="10l"]){ --column-start-l: 10; }
::slotted([start-column~="11"]){  --column-start: 11; }
::slotted([start-column~="11s"]){ --column-start-s: 11; }
::slotted([start-column~="11m"]){ --column-start-m: 11; }
::slotted([start-column~="11l"]){ --column-start-l: 11; }
::slotted([start-column~="12"]){  --column-start: 12; }
::slotted([start-column~="12s"]){ --column-start-s: 12; }
::slotted([start-column~="12m"]){ --column-start-m: 12; }
::slotted([start-column~="12l"]){ --column-start-l: 12; }
::slotted([start-column~="13"]){  --column-start: 13; }
::slotted([start-column~="13s"]){ --column-start-s: 13; }
::slotted([start-column~="13m"]){ --column-start-m: 13; }
::slotted([start-column~="13l"]){ --column-start-l: 13; }
::slotted([start-column~="14"]){  --column-start: 14; }
::slotted([start-column~="14s"]){ --column-start-s: 14; }
::slotted([start-column~="14m"]){ --column-start-m: 14; }
::slotted([start-column~="14l"]){ --column-start-l: 14; }
::slotted([start-column~="15"]){  --column-start: 15; }
::slotted([start-column~="15s"]){ --column-start-s: 15; }
::slotted([start-column~="15m"]){ --column-start-m: 15; }
::slotted([start-column~="15l"]){ --column-start-l: 15; }
::slotted([start-column~="16"]){  --column-start: 16; }
::slotted([start-column~="16s"]){ --column-start-s: 16; }
::slotted([start-column~="16m"]){ --column-start-m: 16; }
::slotted([start-column~="16l"]){ --column-start-l: 16; }

:host([size="s"]) ::slotted([columns]), :host([size="s"]) ::slotted([start-column]){
  grid-column-start: var(--column-start-s, var(--column-start, auto));
  grid-column-end: var(--column-end-s, var(--column-end, auto));
}
:host([size="m"]) ::slotted([columns]), :host([size="m"]) ::slotted([start-column]){
  grid-column-start: var(--column-start-m, var(--column-start, auto));
  grid-column-end: var(--column-end-m, var(--column-end, auto));
}
:host([size="l"]) ::slotted([columns]), :host([size="l"]) ::slotted([start-column]){
  grid-column-start: var(--column-start-l, var(--column-start, auto));
  grid-column-end: var(--column-end-l, var(--column-end, auto));
}

::slotted([rows~="1"]){  --row-end: span 1; }
::slotted([rows~="1s"]){ --row-end-s: span 1; }
::slotted([rows~="1m"]){ --row-end-m: span 1; }
::slotted([rows~="1l"]){ --row-end-l: span 1; }
::slotted([rows~="2"]){  --row-end: span 2; }
::slotted([rows~="2s"]){ --row-end-s: span 2; }
::slotted([rows~="2m"]){ --row-end-m: span 2; }
::slotted([rows~="2l"]){ --row-end-l: span 2; }
::slotted([rows~="3"]){  --row-end: span 3; }
::slotted([rows~="3s"]){ --row-end-s: span 3; }
::slotted([rows~="3m"]){ --row-end-m: span 3; }
::slotted([rows~="3l"]){ --row-end-l: span 3; }
::slotted([rows~="4"]){  --row-end: span 4; }
::slotted([rows~="4s"]){ --row-end-s: span 4; }
::slotted([rows~="4m"]){ --row-end-m: span 4; }
::slotted([rows~="4l"]){ --row-end-l: span 4; }
::slotted([rows~="5"]){  --row-end: span 5; }
::slotted([rows~="5s"]){ --row-end-s: span 5; }
::slotted([rows~="5m"]){ --row-end-m: span 5; }
::slotted([rows~="5l"]){ --row-end-l: span 5; }
::slotted([rows~="6"]){  --row-end: span 6; }
::slotted([rows~="6s"]){ --row-end-s: span 6; }
::slotted([rows~="6m"]){ --row-end-m: span 6; }
::slotted([rows~="6l"]){ --row-end-l: span 6; }
::slotted([rows~="7"]){  --row-end: span 7; }
::slotted([rows~="7s"]){ --row-end-s: span 7; }
::slotted([rows~="7m"]){ --row-end-m: span 7; }
::slotted([rows~="7l"]){ --row-end-l: span 7; }
::slotted([rows~="8"]){  --row-end: span 8; }
::slotted([rows~="8s"]){ --row-end-s: span 8; }
::slotted([rows~="8m"]){ --row-end-m: span 8; }
::slotted([rows~="8l"]){ --row-end-l: span 8; }
::slotted([rows~="9"]){  --row-end: span 9; }
::slotted([rows~="9s"]){ --row-end-s: span 9; }
::slotted([rows~="9m"]){ --row-end-m: span 9; }
::slotted([rows~="9l"]){ --row-end-l: span 9; }
::slotted([rows~="10"]){  --row-end: span 10; }
::slotted([rows~="10s"]){ --row-end-s: span 10; }
::slotted([rows~="10m"]){ --row-end-m: span 10; }
::slotted([rows~="10l"]){ --row-end-l: span 10; }
::slotted([rows~="11"]){  --row-end: span 11; }
::slotted([rows~="11s"]){ --row-end-s: span 11; }
::slotted([rows~="11m"]){ --row-end-m: span 11; }
::slotted([rows~="11l"]){ --row-end-l: span 11; }
::slotted([rows~="12"]){  --row-end: span 12; }
::slotted([rows~="12s"]){ --row-end-s: span 12; }
::slotted([rows~="12m"]){ --row-end-m: span 12; }
::slotted([rows~="12l"]){ --row-end-l: span 12; }
::slotted([rows~="13"]){  --row-end: span 13; }
::slotted([rows~="13s"]){ --row-end-s: span 13; }
::slotted([rows~="13m"]){ --row-end-m: span 13; }
::slotted([rows~="13l"]){ --row-end-l: span 13; }
::slotted([rows~="14"]){  --row-end: span 14; }
::slotted([rows~="14s"]){ --row-end-s: span 14; }
::slotted([rows~="14m"]){ --row-end-m: span 14; }
::slotted([rows~="14l"]){ --row-end-l: span 14; }
::slotted([rows~="15"]){  --row-end: span 15; }
::slotted([rows~="15s"]){ --row-end-s: span 15; }
::slotted([rows~="15m"]){ --row-end-m: span 15; }
::slotted([rows~="15l"]){ --row-end-l: span 15; }
::slotted([rows~="16"]){  --row-end: span 16; }
::slotted([rows~="16s"]){ --row-end-s: span 16; }
::slotted([rows~="16m"]){ --row-end-m: span 16; }
::slotted([rows~="16l"]){ --row-end-l: span 16; }

::slotted([start-row~="1"]){  --row-start: 1; }
::slotted([start-row~="1s"]){ --row-start-s: 1; }
::slotted([start-row~="1m"]){ --row-start-m: 1; }
::slotted([start-row~="1l"]){ --row-start-l: 1; }
::slotted([start-row~="2"]){  --row-start: 2; }
::slotted([start-row~="2s"]){ --row-start-s: 2; }
::slotted([start-row~="2m"]){ --row-start-m: 2; }
::slotted([start-row~="2l"]){ --row-start-l: 2; }
::slotted([start-row~="3"]){  --row-start: 3; }
::slotted([start-row~="3s"]){ --row-start-s: 3; }
::slotted([start-row~="3m"]){ --row-start-m: 3; }
::slotted([start-row~="3l"]){ --row-start-l: 3; }
::slotted([start-row~="4"]){  --row-start: 4; }
::slotted([start-row~="4s"]){ --row-start-s: 4; }
::slotted([start-row~="4m"]){ --row-start-m: 4; }
::slotted([start-row~="4l"]){ --row-start-l: 4; }
::slotted([start-row~="5"]){  --row-start: 5; }
::slotted([start-row~="5s"]){ --row-start-s: 5; }
::slotted([start-row~="5m"]){ --row-start-m: 5; }
::slotted([start-row~="5l"]){ --row-start-l: 5; }
::slotted([start-row~="6"]){  --row-start: 6; }
::slotted([start-row~="6s"]){ --row-start-s: 6; }
::slotted([start-row~="6m"]){ --row-start-m: 6; }
::slotted([start-row~="6l"]){ --row-start-l: 6; }
::slotted([start-row~="7"]){  --row-start: 7; }
::slotted([start-row~="7s"]){ --row-start-s: 7; }
::slotted([start-row~="7m"]){ --row-start-m: 7; }
::slotted([start-row~="7l"]){ --row-start-l: 7; }
::slotted([start-row~="8"]){  --row-start: 8; }
::slotted([start-row~="8s"]){ --row-start-s: 8; }
::slotted([start-row~="8m"]){ --row-start-m: 8; }
::slotted([start-row~="8l"]){ --row-start-l: 8; }
::slotted([start-row~="9"]){  --row-start: 9; }
::slotted([start-row~="9s"]){ --row-start-s: 9; }
::slotted([start-row~="9m"]){ --row-start-m: 9; }
::slotted([start-row~="9l"]){ --row-start-l: 9; }
::slotted([start-row~="10"]){  --row-start: 10; }
::slotted([start-row~="10s"]){ --row-start-s: 10; }
::slotted([start-row~="10m"]){ --row-start-m: 10; }
::slotted([start-row~="10l"]){ --row-start-l: 10; }
::slotted([start-row~="11"]){  --row-start: 11; }
::slotted([start-row~="11s"]){ --row-start-s: 11; }
::slotted([start-row~="11m"]){ --row-start-m: 11; }
::slotted([start-row~="11l"]){ --row-start-l: 11; }
::slotted([start-row~="12"]){  --row-start: 12; }
::slotted([start-row~="12s"]){ --row-start-s: 12; }
::slotted([start-row~="12m"]){ --row-start-m: 12; }
::slotted([start-row~="12l"]){ --row-start-l: 12; }
::slotted([start-row~="13"]){  --row-start: 13; }
::slotted([start-row~="13s"]){ --row-start-s: 13; }
::slotted([start-row~="13m"]){ --row-start-m: 13; }
::slotted([start-row~="13l"]){ --row-start-l: 13; }
::slotted([start-row~="14"]){  --row-start: 14; }
::slotted([start-row~="14s"]){ --row-start-s: 14; }
::slotted([start-row~="14m"]){ --row-start-m: 14; }
::slotted([start-row~="14l"]){ --row-start-l: 14; }
::slotted([start-row~="15"]){  --row-start: 15; }
::slotted([start-row~="15s"]){ --row-start-s: 15; }
::slotted([start-row~="15m"]){ --row-start-m: 15; }
::slotted([start-row~="15l"]){ --row-start-l: 15; }
::slotted([start-row~="16"]){  --row-start: 16; }
::slotted([start-row~="16s"]){ --row-start-s: 16; }
::slotted([start-row~="16m"]){ --row-start-m: 16; }
::slotted([start-row~="16l"]){ --row-start-l: 16; }

:host([size="s"]) ::slotted([rows]), :host([size="s"]) ::slotted([start-row]){
  grid-row-start: var(--row-start-s, var(--row-start, auto));
  grid-row-end: var(--row-end-s, var(--row-end, auto));
}
:host([size="m"]) ::slotted([rows]), :host([size="m"]) ::slotted([start-row]){
  grid-row-start: var(--row-start-m, var(--row-start, auto));
  grid-row-end: var(--row-end-m, var(--row-end, auto));
}
:host([size="l"]) ::slotted([rows]), :host([size="l"]) ::slotted([start-row]){
  grid-row-start: var(--row-start-l, var(--row-start, auto));
  grid-row-end: var(--row-end-l, var(--row-end, auto));
}`

let shadowRoot;
let template = document.createElement('template');
template.innerHTML = `<style>${style}</style>\n<slot></slot>`;
class Grid extends HTMLElement {
    constructor() {
        super();
        this._columns = null;
        this._rows = null;
        this._gutter = null;
        this._rowgutter = null;
        this._autoflow = null;
        this._breakpoints = null;
        this._breakpointsString = null;
        shadowRoot = this.attachShadow({ mode: 'open' });
        if (typeof ShadyCSS !== 'undefined') {
            ShadyCSS.prepareTemplate(template, 'grid-container');
            ShadyCSS.styleElement(this);
        }
        shadowRoot.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() {
        return ['gutter', 'rowgutter', 'autoflow', 'rows', 'columns', 'breakpoints'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
    connectedCallback() {
        if (window._nucleiGridInternal === undefined || window._nucleiGridInternal.elements === undefined) {
            window._nucleiGridInternal = window._nucleiGridInternal || {};
            window._nucleiGridInternal.elements = [];
            window.addEventListener('resize', this._debounce(this._resizeEvent, 50));
        }
        window._nucleiGridInternal.elements.push(this);
        setTimeout(() => {
            this._elementQuery(this);
        }, 10);
    }
    _resizeEvent() {
        window._nucleiGridInternal.elements.forEach((element, index) => {
            if (!document.body.contains(element))
                return window._nucleiGridInternal.elements.splice(index, 1);
            element._elementQuery(element);
        });
    }
    _debounce(callback, time) {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(callback, time);
        };
    }
    _elementQuery(element) {
        element.style.gridColumnGap = 0;
        let elementWidth = element.clientWidth;
        element.style.gridColumnGap = null;
        let prev = null;
        let last = Object.keys(element.breakpoints)[Object.keys(element.breakpoints).length - 1];
        for (let breakpoint in element.breakpoints) {
            if (elementWidth >= element.breakpoints[breakpoint] || prev === null) {
                prev = {
                    boundary: element.breakpoints[breakpoint],
                    size: breakpoint
                };
            }
            if (elementWidth < element.breakpoints[breakpoint] || last === breakpoint) {
                let oldSize = element.getAttribute('size');
                if (oldSize !== prev.size) {
                    element.dispatchEvent(new CustomEvent('sizechange', { detail: {
                            size: prev.size,
                            pixelBoundary: prev.boundary,
                            prevSize: oldSize
                        } }));
                    element.setAttribute('size', prev.size);
                }
                break;
            }
        }
    }
    set breakpoints(breakpoints) {
        if (this._breakpointsString === breakpoints)
            return;
        this._breakpointsString = breakpoints;
        this._breakpoints = {};
        breakpoints.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this._breakpoints[size] = item.replace(/[^0-9]*/g, '').trim();
        });
        this.setAttribute('breakpoints', breakpoints);
    }
    get breakpoints() {
        return this._breakpoints || window.nucleiGrid.breakpoints || {};
    }
    set autoflow(autoflow) {
        if (this._autoflow === autoflow)
            return;
        this._autoflow = autoflow;
        this.setAttribute('autoflow', autoflow);
    }
    set gutter(gutter) {
        if (this._gutter === gutter)
            return;
        this._gutter = gutter;
        gutter.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-gutter${size.length > 0 ? '-' : ''}${size}`, `${item.replace(/[^0-9]*/g, '').trim()}px`);
        });
        this.setAttribute('gutter', gutter);
    }
    set rowgutter(rowgutter) {
        if (this._rowgutter === rowgutter)
            return;
        this._rowgutter = rowgutter;
        rowgutter.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-row-gutter${size.length > 0 ? '-' : ''}${size}`, `${item.replace(/[^0-9]*/g, '').trim()}px`);
        });
        this.setAttribute('rowgutter', rowgutter);
    }
    set columns(columns) {
        if (this._columns === columns)
            return;
        this._columns = columns;
        columns.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-columns${size.length > 0 ? '-' : ''}${size}`, item.replace(/[^0-9]*/g, '').trim());
        });
        this.setAttribute('columns', columns);
    }
    set rows(rows) {
        if (this._rows === rows)
            return;
        this._rows = rows;
        rows.split(' ').forEach((item) => {
            let size = item.replace(/[0-9]+/g, '').trim();
            this.style.setProperty(`--grid-rows${size.length > 0 ? '-' : ''}${size}`, `repeat(${item.replace(/[^0-9]*/g, '').trim()}, 1fr)`);
        });
        this.setAttribute('rows', rows);
    }
}
window.customElements.define('grid-container', Grid);

}());
//# sourceMappingURL=grid.js.map
