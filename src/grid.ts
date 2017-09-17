/* global HTMLElement */
'use strict'

import { style } from './style'
declare const ShadyCSS // eslint-disable-line no-unused-vars

let shadowRoot
let template = document.createElement('template')
template.innerHTML = `${style}\n<slot></slot>`

class Grid extends HTMLElement { // eslint-disable-line no-unused-vars
  /* Typescript: declare variables */
  private _columns: string = null // eslint-disable-line no-undef
  private _rows: string = null // eslint-disable-line no-undef
  private _gutter: string = null // eslint-disable-line no-undef
  private _rowgutter: string = null // eslint-disable-line no-undef
  private _autoflow: string = null // eslint-disable-line no-undef
  private _breakpoints: object = null // eslint-disable-line no-undef

  constructor () {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super()
    this._breakpoints = window._nuclei_grid.breakpoints || {}
    // create shadowRoot
    shadowRoot = this.attachShadow({mode: 'open'})
    // check if polyfill is used
    if (typeof ShadyCSS !== 'undefined') {
      ShadyCSS.prepareTemplate(template, 'grid-container') // eslint-disable-line no-undef
      // apply css polyfill
      ShadyCSS.styleElement(this) // eslint-disable-line no-undef
    }
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
    if (window._nuclei_grid.eventListeners === undefined || window._nuclei_grid.eventListeners.length <= 0) {
      window.addEventListener('resize', this._resizeEvent)
      window._nuclei_grid.eventListeners = []
    }
    window._nuclei_grid.eventListeners.push(this)
    this._resizeEvent()
  }
  /**
   * @method _resizeEvent
   * @description resize event function
   */
  private _resizeEvent() {
    window._nuclei_grid.eventListeners.forEach((item, index) => {
      // if item not in deom remove from array and return
      if (!document.body.contains(item)) return window._nuclei_grid.eventListeners.splice(index, 1)
      //
      let prev = null
      for (let breakpoint in item._breakpoints) {
        if (item.clientWidth > item._breakpoints[breakpoint]) {
          prev = {
            size: item._breakpoints[breakpoint],
            breakpoint: breakpoint
          }
        } else {
          item.setAttribute('size',prev.breakpoint)
          break
        }
      }
      console.log(item.clientWidth)
    })
  }
  /**
  * @method _getBreakpoints
  * @description get breakpoints from parent css variables
   */
  private _getBreakpoints () {
    let breakpoints = {}
    let sizes = [ 'xs', 's', 'm', 'l', 'xl', 'xxl' ]
    // get breakpoints from css variables
    sizes.forEach(function (size) {
      let breakpoint = String(globalStyles.getPropertyValue('--grid-breakpoint-' + size)).trim() || null
      if (breakpoint !== null) {
        breakpoints[size] = breakpoint
      }
    })
    return breakpoints
  }
  /**
  * @method _columnCss
  * @description return columns css
   */
  private _columnCss (size: string = '') {
    let maxColumns = 24
    let maxRows = 24
    let cssStyle = ``
    // loop through columns
    cssStyle += `::slotted([start-column~="0${size}"]){ grid-column-start: auto; }\n`
    for (let i = 1; i <= maxColumns; i++) {
      // cssStyle += `::slotted([column~="${i}${size}"]){ grid-column-end: span ${i}; }\n`
      cssStyle += `::slotted([start-column~="${i}${size}"]){ grid-column-start: ${i}; }\n`
    }
    // loop through rows
    cssStyle += `::slotted([start-row~="0${size}"]){ grid-row-start: auto; }\n`
    for (let i = 1; i <= maxRows; i++) {
      // cssStyle += `::slotted([row~="${i}${size}"]){ grid-row-end: span ${i}; }\n`
      cssStyle += `::slotted([start-row~="${i}${size}"]){ grid-row-start: ${i}; }\n`
    }
    // reset start values
    // cssStyle += `::slotted([start-column~="0${size}"]){ grid-column-start: auto; }\n`
    // cssStyle += `::slotted([start-row~="0${size}"]){ grid-row-start: auto; }\n`
    console.log(cssStyle)
  }
  /**
  * @method _breakPointCss
  * @description return break point css
   */
  private _breakPointCss () {
    let style = ``
    // get breakpoints from css variables
    let breakpoints = this._getBreakpoints()
    // add breakpoint css
    Object.keys(breakpoints).forEach((size, index) => {
      style += `@media (min-width:${breakpoints[size]}){
        :host{
          grid-template-columns: repeat(var(--grid-columns-${size}, var(--grid-columns, auto-fill)), 1fr);
          grid-template-rows: var(--grid-rows-${size}, var(--grid-rows, none));
        }
        ${this._columnCss(size)}
      }\n`
    })
    // return breakpoints
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

    columns.split(' ').forEach((item) => {
      let size = item.replace(/[0-9]+/g, '').trim()
      this.style.setProperty(`--grid-columns${size.length > 0 ? '-' : ''}${size}`, item.replace(/[^0-9]*/g, '').trim())
    })

    this.setAttribute('columns', columns)
  }
  /**
  * @method setter rows
  * @description set the rows property
   */
  set rows (rows: string) {
    if (this._rows === rows) return
    this._rows = rows

    rows.split(' ').forEach((item) => {
      let size = item.replace(/[0-9]+/g, '').trim()
      this.style.setProperty(`--grid-rows${size.length > 0 ? '-' : ''}${size}`, `repeat(${item.replace(/[^0-9]*/g, '').trim()}, 1fr)`)
    })

    this.setAttribute('rows', rows)
  }
}

window.customElements.define('grid-container', Grid)
