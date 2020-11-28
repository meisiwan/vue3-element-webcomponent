import { createApp, render, reactive, compile, watchEffect, WatchStopHandle } from 'vue';
import { refs } from '/@/state';
export class ViewElement extends HTMLElement {
    public ref: string = ''; //用于获取数据
    private error: HTMLElement;
    private content: HTMLElement;
    static errorInHtml: boolean = true; //是否在页面展示错误信息
    static errorInfo: boolean = false; //是否在控制台提示错误信息
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: 'open' });
        this.content = document.createElement('slot');
        this.content.style.display = 'none';
        this.error = document.createElement('div');
        shadow.appendChild(this.error);
        shadow.appendChild(this.content);
    }
    connectedCallback() {
        import('/@/style/load.css');
        let _render = compile(this, { isCustomElement: (tag: string) => !!customElements.get(tag) });
        let stop: WatchStopHandle, hasErr = false;
        const data = refs[this.ref] || reactive({});
        stop = watchEffect(() => {
            try {
                //事先渲染 没有错误就创建app
                render((_render as any)(data), document.createElement('div'))
                const app = createApp({
                    render: _render,
                    data: () => data,
                });
                app.mount(this);
                //错误捕捉
                app.config.errorHandler = (err: unknown, vm: any, info: string) => {
                    if (ViewElement.errorInHtml) {
                        this.content.style.display = 'none';
                        this.error.innerHTML = 'Error: ' + (err as Error).message;
                    }
                    this.info(err as Error);
                }
                stop && stop();
                this.content.style.display = 'block';
            } catch (err) {
                hasErr = true;
                this.info(err);
            }
        });
        !hasErr && stop();

    }
    info(err: Error) {
        ViewElement.errorInfo && console.error(err);
    }
    static get observedAttributes() {
        return ['ref'];
    }
    attributeChangedCallback(name: string, oldValue: string, value: string) {
        if (name == 'ref') {
            this.ref = value;
            //如果已存在 则提示
            if (refs[value]) {
                return console.warn(`ref ${value} already exsit`);
            }
            if (oldValue) {
                //切换ref
                refs[value] = refs[oldValue];
                refs[oldValue] = null;
            } else {
                //初始化
                refs[value] = reactive({});
            }
        }
    }
    disconnectedCallback() {

    }
}
customElements.define('el-view', ViewElement);