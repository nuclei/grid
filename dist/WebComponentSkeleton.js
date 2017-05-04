(function () {
'use strict';

const makeTemplate = function (strings) {
    let html = strings[strings.length - 1];
    let template = document.createElement('template');
    template.innerHTML = html;
    return template;
};

let template = makeTemplate `<style>
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
  My name is <span id="name" class="name"></span>, I feel <slot></slot>`;
class WebComponentSkeleton extends HTMLElement {
    constructor() {
        super();
        this._name = '';
        this._disabled = false;
        this.disabled = false;
        let shadowRoot = this.attachShadow({ mode: 'open' });
        if (typeof ShadyCSS !== 'undefined') {
            ShadyCSS.prepareTemplate(template, 'page-sections');
            ShadyCSS.styleElement(this);
        }
        shadowRoot.appendChild(document.importNode(template.content, true));
    }
    static get observedAttributes() {
        return ['disabled', 'name'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#name').addEventListener('click', this.onClick.bind(this));
    }
    _toggleAttribute(attrName, isActive) {
        if (isActive === true) {
            this.setAttribute(attrName, 'true');
        }
        else {
            this.removeAttribute(attrName);
        }
    }
    set name(name) {
        if (this._name === name)
            return;
        this._name = name;
        this.shadowRoot.querySelector('#name').innerHTML = name;
    }
    get name() {
        return this._name;
    }
    set disabled(disabled) {
        if (this._disabled === disabled || typeof (disabled) !== 'boolean')
            return;
        this._disabled = disabled;
        this._toggleAttribute('disabled', disabled);
    }
    get disabled() {
        return this._disabled;
    }
    onClick(e) {
        this.dispatchEvent(new CustomEvent('name-clicked', {
            detail: { name: this.shadowRoot.querySelector('#name').innerHTML }, bubbles: false
        }));
    }
}
window.customElements.define('web-component-skeleton', WebComponentSkeleton);

}());
//# sourceMappingURL=WebComponentSkeleton.js.map
