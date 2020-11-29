import { Component } from './component';
export class ButtonGroup extends Component {
    constructor() {
        super({
            tag: 'slot',
            className: 'el-button-group',
        });
    }
}
customElements.define('el-button-group', ButtonGroup);