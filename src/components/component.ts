import { watch, ref } from 'vue';

interface ButtonProp {
    tag: string,
    className: string
}
export class Component extends HTMLElement {
    #content: HTMLElement;
    #name: string; //默认类名
    static styles: CSSStyleSheet = new CSSStyleSheet();
    static rules: { value: CSSRule[] } = ref([]);
    isMount: boolean = false;
    constructor({ tag, className }: ButtonProp) {
        super();
        this.isMount = !this.closest('el-view');
        this.#name = className;
        this.#content = document.createElement(tag);
        // this.#content.className = className;
        // this.classList.add(className);
        if (this.isMount) {
            var shadow = this.attachShadow({ mode: 'open' });
            //获取css
            Component.getStyles().then((rules) => {
                const css = [].filter.call(rules,
                    (rule: CSSStyleRule) => rule.selectorText.includes(className)
                ) as CSSStyleRule[];
                if (css.length) {
                    const styleDom = document.createElement('style');
                    css.forEach(css => {
                        styleDom.innerHTML += css.cssText
                    });
                    shadow.appendChild(styleDom);
                }
                if (tag != 'slot') {
                    this.#content.innerHTML = '<slot></slot>';
                }
                shadow.appendChild(this.#content);
                this.classList.add(this.#name)

            });
        }
    }
    gePproperty() {
        return {
            content: this.#content,
            name: this.#name
        }
    }
    connectedCallback() {
    }
    static getStyles() {
        let { styles, rules } = Component;
        if (styles.rules.length) return Promise.resolve(rules.value);
        return new Promise((resolve, reject) => {
            const stop = watch(rules, () => {
                if (styles.rules.length) {
                    resolve(styles.rules);
                    stop && stop();
                }
            });
        });
    }
}

import('/@/style/component.css').then((module) => {
    let cssTexts = module.default.match(/([\w\W]+?\{[\w\W]+?\})/g) as string[];
    let { styles, rules } = Component;
    try {
        for (let i = cssTexts.length; i--; i >= 0) {
            styles.insertRule(cssTexts[i], 0);
        }
        return Promise.resolve((rules.value as any) = styles.rules);
    } catch (err) {
        console.error(err);
        return Promise.reject();
    }
});