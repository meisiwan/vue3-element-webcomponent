import { Element } from './component';
export class ButtonGroup extends Element {
    constructor() {
        super({ className: 'el-button-group' });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
}
customElements.define('el-button-group', ButtonGroup);