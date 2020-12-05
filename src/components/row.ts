import { Element } from './component';
export class Row extends Element {
    constructor() {
        super({
            className: 'el-row'
        });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
}
customElements.define('el-row', Row);