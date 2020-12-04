import { Component, InputElement } from './component';
import { defineComponent } from 'vue';
export class Radio extends InputElement {
    constructor() {
        super();
        Component.call(this, {
            className: 'el-radio',
        });
    }
    connectedCallback() {
        if (!this.isMount) return;
        this.classList.add(this.class);
    }
    static get observedAttributes() {
        return ['type', 'loading', 'size', 'disabled'];
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
            default: break;
        }

    }
}
customElements.define('el-radio', Radio);
export default defineComponent({
    template: `
        <el-radio 
            :type='type'  
            :size='size' 
            :loading="loading" 
            :disabled='disabled'>
               
        </el-radio>
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


