import { Component, Element } from './component';
import { defineComponent } from 'vue';

export class Link extends Element {
    constructor() {
        super();
        Component.call(this, {
            tag: 'slot',
            className: 'el-link',
        });
    }
    connectedCallback() {
        if (!this.isMount) return;
        this.classList.add(this.class);
    }

    static get observedAttributes() {
        return ['type', 'icon', 'loading', 'underline', 'disabled'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (this.isMount) {
            const name = this.class;
            const classList = this.classList;
            console.log(attr)
            switch (attr) {
                case 'type': {
                    classList.remove(name + '--' + oldValue);
                    classList.add(name + '--' + value);
                    break;
                }
                case 'loading':
                case 'disabled':
                case 'underline': {
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

customElements.define('el-link', Link);

export default defineComponent({
    template: `
        <el-link 
            :type='type' 
            :disabled='disabled' 
            :underline='!disabled && underline'>
                <a v-if='href' :href='href' :target='target'>
                    <slot></slot>
                </a>
                <slot v-else></slot>
        </el-link>
    `,
    props: {
        href: String,
        type: {
            type: String,
            default: 'default'
        }, // [primary, success, warning, danger, info]
        icon: String,
        disabled: Boolean,
        target: String,
        underline: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { slots }) {
        return { slots }
    }
});
