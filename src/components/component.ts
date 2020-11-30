interface ButtonProp {
    tag: string,
    className: string
}
export class Component extends HTMLElement {
    #content: HTMLElement;
    #name: string; //默认类名
    isMount: boolean = false;
    constructor({ tag, className }: ButtonProp) {
        super();
        this.isMount = !this.closest('el-view');
        this.#name = className;
        this.#content = document.createElement(tag);
        const shadow = this.attachShadow({ mode: 'open' });
        if (tag != 'slot') {
            this.#content.innerHTML = '<slot></slot>';
        }
        shadow.appendChild(this.#content);
    }
    gePproperty() {
        return {
            content: this.#content,
            name: this.#name
        }
    }
    connectedCallback() {
        this.classList.add(this.#name);
    }
}