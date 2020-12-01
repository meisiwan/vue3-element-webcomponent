import { Component } from './component';
import { defineComponent } from 'vue';
export class Button extends Component {
    constructor() {
        super({
            tag: 'slot',
            className: 'el-button',
        });
    }
    connectedCallback() {
        if (this.isMount) {
            const { name } = this.getPproperty();
            this.classList.add(name)
            // const { content, name } = this.getPproperty();
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
            const { content, name } = this.getPproperty();
            switch (attr) {
                case 'type':
                case 'size': {
                    this.classList.remove(name + '--' + oldValue);
                    this.classList.add(name + '--' + value);
                    break;
                }
                case 'loading': {
                    if (value == 'true') {
                        this.classList.add('is-loading');
                    } else if (value == 'false') {
                        this.classList.remove('is-loading');
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
        <el-button :type='type'  :size='size' :loading="loading">
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
        size: String
    },
    setup(props, { slots }) {
        return { slots }
    }
});


