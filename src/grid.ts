/* global HTMLElement */
'use strict'

declare const ShadyCSS // eslint-disable-line no-unused-vars
let globalStyles
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
\n`

let template = document.createElement('template')

class Grid extends HTMLElement { // eslint-disable-line no-unused-vars
  /* Typescript: declare variables */
  private _columns: string = null // eslint-disable-line no-undef
  private _rows: string = null // eslint-disable-line no-undef
  private _gutter: string = null // eslint-disable-line no-undef
  private _rowgutter: string = null // eslint-disable-line no-undef
  private _autoflow: string = null // eslint-disable-line no-undef

  constructor () {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super()
    // create shadowRoot
    let shadowRoot = this.attachShadow({mode: 'open'})
    // check if polyfill is used
    if (typeof ShadyCSS !== 'undefined') {
      ShadyCSS.prepareTemplate(template, 'grid-container') // eslint-disable-line no-undef
      // apply css polyfill
      ShadyCSS.styleElement(this) // eslint-disable-line no-undef
    }
    // get the parent documents style
    globalStyles = window.getComputedStyle(document.documentElement)
    // get max columns from css variable
    let maxColumns = parseInt(String(globalStyles.getPropertyValue('--grid-max-columns')).trim()) || 16
    // get breakpoints from css variables
    let breakpoints = this._getBreakpoints()
    // add columns for no media query
    style += this._columnCss(maxColumns)
    // add breakpoint css
    Object.keys(breakpoints).forEach((size, index) => {
      style += `@media (min-width:${breakpoints[size].breakpoint}){
        :host{
          grid-template-columns: repeat(var(--grid-columns-${size}, var(--grid-columns, auto-fill), 1fr);
          grid-template-rows: var(--grid-rows-${size}, var(--grid-rows, none));
          grid-gap: var(--grid-gutter-${size}, var(--grid-gutter, 0));
        }
        ${this._columnCss(maxColumns, size)}
      }\n`
    })
    // attach to template
    template.innerHTML = `<style>${style}</style>\n<slot></slot>`
    // add content to shadowRoot
    shadowRoot.appendChild(document.importNode(template.content, true))
  }
  /**
  * @method observedAttributes
  * @description return attributes that should be watched for updates
   */
  static get observedAttributes () {
    return ['gutter', 'rowgutter', 'autoflow', 'rows', 'columns']
  }
  /**
  * @method observedAttributes
  * @description return attributes that should be watched for updates
   */
  attributeChangedCallback (attrName: string, oldVal, newVal) {
    this[attrName] = newVal
  }

  /**
  * @method connectedCallback
  * @description When element is added to DOM
   */
  connectedCallback () {

  }
  /**
  * @method _getBreakpoints
  * @description get breakpoints from parent css variables
   */
  private _getBreakpoints () {
    let breakpoints = {}
    let columns = {
      'xs': 1,
      's': 2,
      'm': 3,
      'l': 12,
      'xl': 16,
      'xxl': 16
    }
    // get breakpoints from css variables
    Object.keys(columns).forEach(function (size) {
      let breakpoint = String(globalStyles.getPropertyValue('--grid-breakpoint-' + size)).trim() || null
      if (breakpoint !== null) {
        breakpoints[size] = {
          breakpoint: breakpoint,
          columns: columns[size]
        }
      }
    })
    return breakpoints
  }
  /**
  * @method _columnCss
  * @description return columns css
   */
  private _columnCss (maxColumns: number, size: string = '') {
    let style = ``

    for (let i = 1; i <= maxColumns; i++) {
      style += `\t::slotted([column~="${i}${size}"]){ grid-column-end: span ${i}; }\n`
      style += `\t::slotted([row~="${i}${size}"]){ grid-row-end: span ${i}; }\n`
      style += `\t::slotted([start-column~="${i}${size}"]){ grid-column-start: ${i}; }\n`
      style += `\t::slotted([start-row~="${i}${size}"]){ grid-row-start: ${i}; }\n`
    }
    return style
  }
  /**
  * @method setter autoflow
  * @description set the autoflow property
   */
  set autoflow (autoflow: string) {
    if (this._autoflow === autoflow) return
    this._autoflow = autoflow

    this.setAttribute('autoflow', autoflow)
  }
  /**
  * @method setter gutter
  * @description set the gutter property
   */
  set gutter (gutter: string) {
    if (this._gutter === gutter) return
    this._gutter = gutter

    this.style.setProperty('--grid-gutter', gutter)
    this.setAttribute('gutter', gutter)
  }
  /**
  * @method setter rowgutter
  * @description set the rowgutter property
   */
  set rowgutter (rowgutter: string) {
    if (this._rowgutter === rowgutter) return
    this._rowgutter = rowgutter

    this.style.setProperty('--grid-row-gutter', rowgutter)
    this.setAttribute('rowgutter', rowgutter)
  }
  /**
  * @method setter columns
  * @description set the columns property
   */
  set columns (columns: string) {
    if (this._columns === columns) return
    this._columns = columns

    this.style.setProperty('--grid-columns', columns)
    this.setAttribute('columns', columns)
  }
  /**
  * @method setter rows
  * @description set the rows property
   */
  set rows (rows: string) {
    if (this._rows === rows) return
    this._rows = rows

    this.style.setProperty('--grid-rows', `repeat(${rows}, 1fr)`)
    this.setAttribute('rows', rows)
  }
}

window.customElements.define('grid-container', Grid)
