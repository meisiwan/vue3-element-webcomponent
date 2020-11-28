import { Component } from './component';

export class Button extends Component {
    constructor() {
        super({
            tag: 'button',
            className: 'el-button',
        });
    }
    static get observedAttributes() {
        return ['type'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        const { content, name } = this;
        switch (attr) {
            case 'type': {
                content.classList.remove(name + '--' + oldValue);
                content.classList.add(name + '--' + value);
                return;
            }
            default: return;
        }
    }
}
customElements.define('el-button', Button);