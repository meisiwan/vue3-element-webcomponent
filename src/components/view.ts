import { createApp, render, reactive, compile, onMounted } from 'vue';
import Button from './button';
import Link from './link';
interface Components {
    [key: string]: any
}
const components = {
    'el-button': Button,
    'el-link': Link
} as Components;

export class ViewElement extends HTMLElement {
    static showError: boolean = true; //是否在控制台提示错误信息
    #components = new Set<string>();
    #data = reactive<Record<string, any>>({});
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = '<slot></slot>';
    }
    connectedCallback() {
        console.time('render');
        const template = this.innerHTML;
        compile(`<section>${template}</section>`, {
            isCustomElement: tag => {
                components[tag] && this.#components.add(tag);
            }
        });
        const app = createApp({
            //编译收集标签
            render: compile(template, {
                isCustomElement: (tag) => false
            }),
            //按需引入组件
            components: Array.from(this.#components).reduce(
                (res, tag: string) => Object.assign(res, { [tag]: components[tag] }),
                {}
            ),
            data: () => this.#data,
            setup: () => {
                onMounted(() => {
                    console.timeEnd('render');
                    this.style.visibility = 'visible';
                });
            }
        });
        app.config.warnHandler = (msg) => {
            // console.warn(msg)
        }
        app.mount(this);

    }
    static get observedAttributes() {
        return [':data', 'data'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        switch (attr) {
            case 'data':
            case ':data': {
                try {
                    Object.assign(this.#data, new Function(`return ${value};`)());
                    // this.#data.item = 1;
                } catch (err) {
                    console.log(err);
                }
            }
        }

    }
    disconnectedCallback() {

    }
}
customElements.define('el-view', ViewElement);