interface ButtonProp {
    tag?: string,
    className: string
}
export class Element extends HTMLElement {
    class: string = '';
    constructor({ className, tag = 'slot' }: ButtonProp) {
        super();
        this.class = className;
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(document.createElement(tag));
    }
}