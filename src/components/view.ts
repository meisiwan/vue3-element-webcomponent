import { createApp, render, reactive, compile, watchEffect, WatchStopHandle, onErrorCaptured, watch } from 'vue';
import { setRef, _getRef } from '/@/state';
import Button from './button';
export class ViewElement extends HTMLElement {
    static showError: boolean = true; //是否在控制台提示错误信息
    #ref: string = ''; //用于获取数据
    #content: HTMLElement;
    #tip: HTMLElement;
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: 'open' });
        this.#content = document.createElement('slot');
        this.#content.style.display = 'none';
        this.#tip = document.createElement('div');
        shadow.appendChild(this.#tip);
        shadow.appendChild(this.#content);
    }
    connectedCallback() {
        import('/@/style/load.css');
        let _render = compile(this, { isCustomElement: (tag: string) => !!customElements.get(tag) });
        let stop: WatchStopHandle, hasErr = false;
        const data = _getRef(this.#ref) || reactive({});
        stop = watchEffect(() => {
            try {
                //事先渲染 没有错误就创建app
                render((_render as any)(data), document.createElement('section'))
                const app = createApp({
                    render: _render,
                    data: () => data,
                });
                // app.component('el-button', Button)
                // app.config.isCustomElement = tag => tag.startsWith('el-');
                app.mount(this);
                stop && stop();
                this.#content.style.display = 'block';
            } catch (err) {
                if (hasErr) {
                    this.info(err);
                    console.error(err);
                    console.error(this.innerHTML);
                }
                hasErr = true;
            }
        });
        !hasErr && stop();
    }
    info(err: Error) {
        if (ViewElement.showError) {
            this.#tip.style.cssText = 'display: block; color:red; padding: 10px 0;'
            this.#tip.innerHTML = 'Error: ' + err.message;
        }
    }
    static get observedAttributes() {
        return ['ref'];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        if (attr == 'ref') {
            this.#ref = value;
            //如果已存在 则提示
            if (_getRef(value)) {
                return console.warn(`ref ${value} already exsit`);
            }
            if (oldValue) {
                //切换ref
                setRef(value, _getRef(oldValue));
                setRef(oldValue, null)
            } else {
                //初始化
                setRef(value, reactive({}))
            }
        }
    }
    disconnectedCallback() {

    }
}
customElements.define('el-view', ViewElement);