import { Component } from './component';
export class Row extends Component {
    constructor() {
        super({
            tag: 'slot',
            className: 'el-row',
        });
    }
}
customElements.define('el-row', Row);