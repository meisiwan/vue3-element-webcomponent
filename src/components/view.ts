import { createApp, render, reactive, compile, onMounted, ComponentPublicInstance } from 'vue';
import ButtonComponent, { Button } from './button.vue';
import LinkComponent, { Link } from './link.vue';
import RadioCompoent, { Radio } from './radio.vue';
import RadioGroupCompoent, { RadioGroup } from './radio-group.vue';
interface Components {
    [key: string]: any
}
//需要进行数据传递的组件
const ModelComponents = {
    'el-button': ButtonComponent,
    'el-link': LinkComponent,
    'el-radio': RadioCompoent,
    'el-radio-group': RadioGroupCompoent,
} as Components;
//web component实例
const custom = {
    'el-button': Button,
    'el-link': Link,
    'el-radio': Radio,
    'el-radio-group': RadioGroup,
} as Components;

export class ViewElement extends HTMLElement {
    #components = new Set<string>(); //已使用的标签
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
                ModelComponents[tag] && this.#components.add(tag);
            }
        });
        //对已有标签进行按需 加载 和 定义
        const components = {} as Record<string, ComponentPublicInstance>;
        Array.from(this.#components).forEach(tag => {
            customElements.define(tag, custom[tag]);
            components[tag] = ModelComponents[tag];
        });
        const app = createApp({
            //编译收集标签
            render: compile(template, {
                isCustomElement: (tag) => tag.startsWith('el-') && !components[tag]
            }),
            //按需引入组件
            components: components,
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