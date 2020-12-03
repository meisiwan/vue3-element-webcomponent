import { Component, Element } from './component';
import { defineComponent } from 'vue';
export class Button extends Element {
    constructor() {
        super();
        Component.call(this, {
            tag: 'slot',
            className: 'el-button',
        });
    }
    connectedCallback() {
        if (!this.isMount) return;
        this.classList.add(this.class);
        if (this.hasAttribute('plain')) {
            this.classList.add('is-plain');
        }
        if (this.hasAttribute('round')) {
            this.classList.add('is-round');
        }
        if (this.hasAttribute('circle')) {
            this.classList.add('is-circle');
        }
    }
    static get observedAttributes() {
        return ['type', 'icon', 'loading', 'size', 'disabled'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (!this.isMount) return;
        const name = this.class;
        const classList = this.classList;
        switch (attr) {
            case 'type':
            case 'size': {
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
customElements.define('el-button', Button);
export default defineComponent({
    template: `
        <el-button 
            :type='type'  
            :size='size' 
            :loading="loading" 
            :disabled='disabled'>
                <i v-if='loading' class='el-icon-loading'></i>
                <i v-else='icon' :class='icon'></i>
                <slot v-if='!slots.default'></slot>
                <span v-else>
                    <slot></slot>
                </span>
        </el-button>
    `,
    props: {
        loading: Boolean,
        type: String,
        icon: String,
        size: String,
        disabled: Boolean
    },
    setup(props, { slots }) {
        return { slots }
    }
});


