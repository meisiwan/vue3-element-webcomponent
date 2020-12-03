import { Component, Element } from './component';
export class ButtonGroup extends Element {
    constructor() {
        super();
        Component.call(this, {
            tag: 'slot',
            className: 'el-button-group',
        });
    }
    connectedCallback() {
        if (!this.isMount) return;
        this.classList.add(this.class);
    }
}
customElements.define('el-button-group', ButtonGroup);