import { Component } from './component';
import { defineComponent } from 'vue';
import { evalTemp } from '../config';
export class Button extends Component {
    #icon?: HTMLElement;
    #loadIcon?: HTMLElement;
    constructor() {
        super({
            tag: 'slot',
            className: 'el-button',
        });
    }
    connectedCallback() {
        if (this.isMount) {
            const { name } = this.gePproperty();
            this.classList.add(name)
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
        return ['type', 'icon', 'loading', 'size'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (this.isMount) {
            const { content, name } = this.gePproperty();
            switch (attr) {
                case 'type':
                case 'size': {
                    this.classList.remove(name + '--' + oldValue);
                    this.classList.add(name + '--' + value);
                    break;
                }
                case 'icon': {
                    if (!this.#icon) {
                        this.#icon = this.#icon || document.createElement('i');
                        this.#icon.className = value;
                        if (this.innerHTML) {
                            this.#icon.classList.add('el-button-icon')
                            this.insertBefore(this.#icon, this.childNodes[0])
                        } else if (this.#icon) {
                            this.appendChild(this.#icon);
                        }
                    } else if (this.#icon) {
                        this.#icon.className = value;
                    }
                    break;
                }
                case 'loading': {
                    this.#loadIcon = this.#loadIcon || document.createElement('i');
                    this.#loadIcon.className = 'el-icon-loading';
                    if (value == 'true' && !oldValue) {
                        console.log(value, oldValue)
                        this.classList.add('is-loading');
                        if (this.innerHTML) {
                            this.#loadIcon.classList.add('el-button-icon')
                            this.insertBefore(this.#loadIcon, this.childNodes[0])
                        } else {
                            this.appendChild(this.#loadIcon);
                        }
                    } else if (value == 'false' && oldValue == 'true') {
                        this.classList.remove('is-loading');
                        if (this.contains(this.#loadIcon)) {
                            this.removeChild(this.#loadIcon);
                        }
                    }
                    break;
                }
                default: break;
            }
        }

    }
}
customElements.define('el-button', Button);
export default defineComponent({
    template: `
        <el-button :type='type' :icon='icon' :size='size' :loading="loading">
            <slot></slot>
        </el-button>
    `,
    props: {
        loading: Boolean,
        type: String,
        icon: String,
        size: String
    },
    setup(props) {
        console.log(props);
        return props
    }
});


