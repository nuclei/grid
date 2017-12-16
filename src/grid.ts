/* global HTMLElement Window CustomEvent CSSStyleDeclaration */
interface CSSStyleDeclaration {
  gridColumnGap: any // eslint-disable-line no-undef
}
interface Window {
  nucleiGrid: any // eslint-disable-line no-undef
  _nucleiGridInternal: any  // eslint-disable-line no-undef
  customElements: CustomElementRegistry // eslint-disable-line no-undef
}

declare const ShadyCSS // eslint-disable-line no-unused-vars
declare var window: Window
declare let style // eslint-disable-line no-unused-vars

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
  private _breakpointsString: string = null // eslint-disable-line no-undef

  constructor () {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super()
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
    return ['gutter', 'rowgutter', 'autoflow', 'rows', 'columns', 'breakpoints']
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
    // attach event handler if not present
    if (window._nucleiGridInternal === undefined || window._nucleiGridInternal.elements === undefined) {
      window._nucleiGridInternal = window._nucleiGridInternal || {}
      window._nucleiGridInternal.elements = []
      window.addEventListener('resize', this._debounce(this._resizeEvent, 50))
    }
    // add element to list for resize event
    window._nucleiGridInternal.elements.push(this)
    // run element query for initial size
    setTimeout(() => {
      this._elementQuery(this)
    }, 10)
  }
  /**
   * @method _resizeEvent
   * @description resize event function
   */
  private _resizeEvent () {
    window._nucleiGridInternal.elements.forEach((element, index) => {
      // if element not in DOM remove from array and return
      if (!document.body.contains(element)) return window._nucleiGridInternal.elements.splice(index, 1)
      // call elementQuery if element is in dom
      element._elementQuery(element)
    })
  }
  /**
   * @method _debounce
   * @description simple debounce
   */
  private _debounce (callback: object, time: number) {
    let timeout
    return function () {
      clearTimeout(timeout) // this clears the timeout so callback in timeout is not called
      timeout = setTimeout(callback, time)
    }
  }

  /**
   * @method _elementQuery
   * @description check the size of the element and react if nessesary
   */
  private _elementQuery (element) {
    let gridGap = window.getComputedStyle(element).gridColumnGap
    let elementWidth = element.clientWidth
    if (gridGap > 0) {
      element.style.gridColumnGap = 0
      elementWidth = element.clientWidth
      element.style.gridColumnGap = gridGap
    }
    // state variable
    let prev = null
    // get last item
    let last = Object.keys(element.breakpoints)[Object.keys(element.breakpoints).length - 1]
    // loop through breakpoints
    for (let breakpoint in element.breakpoints) {
      if (elementWidth >= element.breakpoints[breakpoint] || prev === null) {
        // keep track of previous item in case next one is to big
        prev = {
          boundary: element.breakpoints[breakpoint],
          size: breakpoint
        }
      }
      // if next element is to big or it is the last element: activate
      if (elementWidth < element.breakpoints[breakpoint] || last === breakpoint) {
        // get old size
        let oldSize = element.getAttribute('size')
        // only update if size actually changed
        if (oldSize !== prev.size) {
          // dispatch custom sizechange event
          element.dispatchEvent(new CustomEvent('sizechange', { detail: {
            size: prev.size,
            pixelBoundary: prev.boundary,
            prevSize: oldSize
          }}))
          // change size attribute
          element.setAttribute('size', prev.size)
        }
        break
      }
    }
  }
  /**
   * @method setter breakpoints
   * @description set breakpoints
   */
  set breakpoints (breakpoints: string) {
    if (this._breakpointsString === breakpoints) return
    this._breakpointsString = breakpoints
    // create breakpoint object
    this._breakpoints = {}
    breakpoints.split(' ').forEach((item) => {
      let size = item.replace(/[0-9]+/g, '').trim()
      this._breakpoints[size] = item.replace(/[^0-9]*/g, '').trim()
    })

    this.setAttribute('breakpoints', breakpoints)
  }
  /**
   * @method getter breakpoints
   * @description get breakpoints
   */
  get breakpoints () {
    return this._breakpoints || window.nucleiGrid.breakpoints || {}
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

    gutter.split(' ').forEach((item) => {
      let size = item.replace(/[0-9]+/g, '').trim()
      this.style.setProperty(`--grid-gutter${size.length > 0 ? '-' : ''}${size}`, `${item.replace(/[^0-9]*/g, '').trim()}px`)
    })

    this.setAttribute('gutter', gutter)
  }
  /**
  * @method setter rowgutter
  * @description set the rowgutter property
   */
  set rowgutter (rowgutter: string) {
    if (this._rowgutter === rowgutter) return
    this._rowgutter = rowgutter

    rowgutter.split(' ').forEach((item) => {
      let size = item.replace(/[0-9]+/g, '').trim()
      this.style.setProperty(`--grid-row-gutter${size.length > 0 ? '-' : ''}${size}`, `${item.replace(/[^0-9]*/g, '').trim()}px`)
    })

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
