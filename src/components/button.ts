import { Component } from './component';
import { defineComponent } from 'vue';
import { evalTemp } from '../config';
export class Button extends Component {
    #icon?: HTMLElement;
    constructor() {
        super({
            tag: 'slot',
            className: 'el-button',
        });
    }
    connectedCallback() {
        if (this.isMount) {
            // const { content, name } = this.gePproperty();
            if (this.hasAttribute('plain')) {
                this.classList.add('is-plain');
            }
            if (this.hasAttribute('round')) {
                this.classList.add('is-round');
            }
            if (this.hasAttribute('circle')) {
                this.classList.add('is-circle');
            }
            if (this.hasAttribute('disabled')) {
                this.classList.add('is-disabled');
            }

        }
    }
    static get observedAttributes() {
        return ['type', 'icon', 'loading'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (this.isMount) {
            const { content, name } = this.gePproperty();
            switch (attr) {
                case 'type': {
                    this.classList.remove(name + '--' + oldValue);
                    this.classList.add(name + '--' + value);
                    return;
                }
                case 'icon': {
                    if (!this.#icon) {
                        this.#icon = document.createElement('i');
                        this.#icon.className = value;
                        if (this.childNodes.length) {
                            this.#icon.classList.add('el-button-icon')
                            this.insertBefore(this.#icon, this.childNodes[0])
                        } else {
                            this.appendChild(this.#icon);
                        }
                    } else if (this.#icon) {
                        this.#icon.className = value;
                    }
                    return;
                }
                case 'loading': {
                    console.log(value)
                    if (attr && value != 'false') {
                        if (!this.#icon) {
                            this.#icon = document.createElement('i');
                            this.#icon.className = 'el-icon-loading';
                            if (this.childNodes.length) {
                                this.#icon.classList.add('el-button-icon')
                                this.insertBefore(this.#icon, this.childNodes[0])
                            } else {
                                this.appendChild(this.#icon);
                            }
                        }
                        this.classList.add('is-loading');
                    } else {
                        this.classList.remove('is-loading');
                    }
                    return;
                }
                default: return;
            }
        }

    }
}
customElements.define('el-button', Button);
export default defineComponent({
    isCustomElement: (tag: string) => tag.startsWith('el-'),
    setup(props) {
        console.log(props);
    }
});


