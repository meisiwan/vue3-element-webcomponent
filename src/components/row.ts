import { Component, Element } from './component';
export class Row extends Element {
    constructor() {
        super();
        Component.call(this, {
            tag: 'slot',
            className: 'el-row',
        });
    }
    connectedCallback() {
        if (!this.isMount) return;
        this.classList.add(this.class);
    }
}
customElements.define('el-row', Row);