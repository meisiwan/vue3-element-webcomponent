interface ButtonProp {
    tag?: string,
    className: string
}
export class Element extends HTMLElement {
    isMount: boolean = false;
    content!: HTMLElement;
    class: string = '';
    constructor() {
        super();
    }
}
export class InputElement extends HTMLInputElement {
    isMount: boolean = false;
    content!: HTMLElement;
    class: string = '';
    constructor() {
        super();
    }
}


export const Component = function (this: Element, { tag = 'slot', className }: ButtonProp) {
    this.isMount = !this.closest('el-view');
    if (!this.isMount) return;
    this.class = className;
    this.content = document.createElement(tag);
    const shadow = this.attachShadow({ mode: 'open' });
    if (tag != 'slot') {
        this.content.innerHTML = '<slot></slot>';
    }
    shadow.appendChild(this.content);
}
