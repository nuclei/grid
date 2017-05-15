/* global HTMLElement CustomEvent */
'use strict'

import { makeTemplate } from './makeTemplate'
declare const ShadyCSS // eslint-disable-line no-unused-vars

let template = makeTemplate`<style>
    :host{
      display: block;
    }
    :host([disabled]){
      color: grey;
    }
    .name{
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid rgb(210, 210, 210);
      background-color: rgb(245, 245, 245);
      box-shadow: 0 1px 3px rgba(0,0,0,.1);
    }
    .name:hover{
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
    }
    .name:active{
      box-shadow: 0 1px 3px rgba(0,0,0,.1);
      border: 1px solid rgb(180, 180, 180);
      background-color: rgb(235, 235, 235);
    }
  </style>
  My name is <span id="name" class="name"></span>, I feel <slot></slot>`

class WebComponentSkeleton extends HTMLElement { // eslint-disable-line no-unused-vars
  /* Typescript: declare variables */
  private _name: string = '' // eslint-disable-line no-undef
  private _disabled: boolean = false // eslint-disable-line no-undef

  constructor () {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super()
    // initiaize variables
    this.disabled = false
    // create shadowRoot
    let shadowRoot = this.attachShadow({mode: 'open'})
    // check if polyfill is used
    if (typeof ShadyCSS !== 'undefined') {
      ShadyCSS.prepareTemplate(template, 'web-component-skeleton') // eslint-disable-line no-undef
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
    return ['disabled', 'name']
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
    this.shadowRoot.querySelector('#name').addEventListener('click', this.onClick.bind(this))
  }
  /**
  * @method _toggleAttribute
  * @description set or remove an attribute on the WC
   */
  private _toggleAttribute (attrName: string, isActive: boolean) {
    if (isActive === true) {
      this.setAttribute(attrName, 'true')
    } else {
      this.removeAttribute(attrName)
    }
  }
  /**
  * @method setter name
  * @description set the name property
   */
  set name (name: string) {
    if (this._name === name) return
    this._name = name

    this.shadowRoot.querySelector('#name').innerHTML = name
  }
  /**
  * @method getter name
  * @description get the name property
   */
  get name () {
    return this._name
  }
  /**
  * @method setter disabled
  * @description set the disabled property
   */
  set disabled (disabled: boolean) {
    if (this._disabled === disabled || typeof (disabled) !== 'boolean') return

    this._disabled = disabled
    this._toggleAttribute('disabled', disabled)
  }
  /**
  * @method getter disabled
  * @description get the disabled property
   */
  get disabled () {
    return this._disabled
  }
  /**
  * @method onClick
  * @description react to click event
   */
  onClick (e: object) {
    this.dispatchEvent(new CustomEvent('name-clicked', {
      detail: { name: this.shadowRoot.querySelector('#name').innerHTML }, bubbles: false
    }))
  }
}

window.customElements.define('web-component-skeleton', WebComponentSkeleton)
