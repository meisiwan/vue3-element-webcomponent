import { Component } from './component';
import { defineComponent } from 'vue';

export class Link extends Component {
    constructor() {
        super({
            tag: 'slot',
            className: 'el-link',
        });
    }
    connectedCallback() {
        if (this.isMount) {
            const { name } = this.getProperty();
            this.classList.add(name);
        }
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (this.isMount) {
            const { content, name } = this.getProperty();
            const classList = this.classList;
            switch (attr) {
                case 'type': {
                    classList.remove(name + '--' + oldValue);
                    classList.add(name + '--' + value);
                    break;
                }
                case 'disabled':
                case 'loading': {
                    if (value == 'true') {
                        classList.add('is-' + attr);
                    } else if (value == 'false') {
                        classList.remove('is-' + attr);
                    }
                    break;
                }
                default: break;
            }
        }

    }
}

customElements.define('el-link', Link, { extends: 'a' });

export default defineComponent({
    template: `
        <a is='el-link'
            :type='type'  
            :href='href'
            :disabled='disabled'>
            <slot></slot>
        </a>
    `,
    props: {
        href: String,
        type: String, // [primary, success, warning, danger, info]
        icon: String,
        disabled: Boolean
    },
    setup(props, { slots }) {
        return { slots }
    }
});
