(function () {
'use strict';

let globalStyles;
let style = `
:host{
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, auto-fill), 1fr);
  grid-template-rows: var(--grid-rows, none);
  grid-gap: var(--grid-gutter, 0);
  grid-row-gap: var(--grid-row-gutter, var(--grid-gutter, 0));
}
:host([autoflow]){
  grid-auto-flow: row dense;
}
:host([autoflow=column]){
  grid-auto-flow: column dense;
}
\n`;
let template = document.createElement('template');
class Grid extends HTMLElement {
    constructor() {
        super();
        this._columns = null;
        this._rows = null;
        this._gutter = null;
        this._rowgutter = null;
        this._autoflow = null;
        let shadowRoot = this.attachShadow({ mode: 'open' });
        if (typeof ShadyCSS !== 'undefined') {
            ShadyCSS.prepareTemplate(template, 'grid-container');
            ShadyCSS.styleElement(this);
        }
        template.innerHTML = `<style>${style}</style>\n<slot></slot>`;
        shadowRoot.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() {
        return ['gutter', 'rowgutter', 'autoflow', 'rows', 'columns'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
    connectedCallback() {
        globalStyles = window.getComputedStyle(document.documentElement);
        let maxColumns = parseInt(String(globalStyles.getPropertyValue('--grid-max-columns')).trim()) || 16;
        let maxRows = parseInt(String(globalStyles.getPropertyValue('--grid-max-rows')).trim()) || 16;
        style += this._columnCss(maxColumns, maxRows);
        style += this._breakPointCss(maxColumns, maxRows);
        this.shadowRoot.querySelector('style').innerHTML = style;
    }
    _getBreakpoints() {
        let breakpoints = {};
        let sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
        sizes.forEach(function (size) {
            let breakpoint = String(globalStyles.getPropertyValue('--grid-breakpoint-' + size)).trim() || null;
            if (breakpoint !== null) {
                breakpoints[size] = breakpoint;
            }
        });
        return breakpoints;
    }
    _columnCss(maxColumns, maxRows, size = '') {
        let style = ``;
        for (let i = 1; i <= maxColumns; i++) {
            style += `::slotted([column~="${i}${size}"]){ grid-column-end: span ${i}; }\n`;
            style += `::slotted([start-column~="${i}${size}"]){ grid-column-start: ${i}; }\n`;
        }
        for (let i = 1; i <= maxRows; i++) {
            style += `::slotted([row~="${i}${size}"]){ grid-row-end: span ${i}; }\n`;
            style += `::slotted([start-row~="${i}${size}"]){ grid-row-start: ${i}; }\n`;
        }
        style += `::slotted([start-column~="0${size}"]){ grid-column-start: auto; }\n`;
        style += `::slotted([start-row~="0${size}"]){ grid-row-start: auto; }\n`;
        return style;
    }
    _breakPointCss(maxColumns, maxRows) {
        let style = ``;
        let breakpoints = this._getBreakpoints();
        Object.keys(breakpoints).forEach((size, index) => {
            style += `@media (min-width:${breakpoints[size]}){
        :host{
          grid-template-columns: repeat(var(--grid-columns-${size}, var(--grid-columns, auto-fill)), 1fr);
          grid-template-rows: var(--grid-rows-${size}, var(--grid-rows, none));
        }
        ${this._columnCss(maxColumns, maxRows, size)}
      }\n`;
        });
        return style;
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
        this.style.setProperty('--grid-gutter', gutter);
        this.setAttribute('gutter', gutter);
    }
    set rowgutter(rowgutter) {
        if (this._rowgutter === rowgutter)
            return;
        this._rowgutter = rowgutter;
        this.style.setProperty('--grid-row-gutter', rowgutter);
        this.setAttribute('rowgutter', rowgutter);
    }
    set columns(columns) {
        if (this._columns === columns)
            return;
        this._columns = columns;
        this.style.setProperty('--grid-columns', columns);
        this.setAttribute('columns', columns);
    }
    set rows(rows) {
        if (this._rows === rows)
            return;
        this._rows = rows;
        this.style.setProperty('--grid-rows', `repeat(${rows}, 1fr)`);
        this.setAttribute('rows', rows);
    }
}
window.customElements.define('grid-container', Grid);

}());
//# sourceMappingURL=grid.js.map
