import { watch, ref } from 'vue';

interface ButtonProp {
    tag: string,
    className: string
}
export class Component extends HTMLElement {
    public content: HTMLElement;
    public name: string; //默认类名
    public static styles: CSSStyleSheet = new CSSStyleSheet();
    public static rules: { value: CSSRule[] } = ref([]);
    constructor({ tag, className }: ButtonProp) {
        super();
        this.name = className;
        var shadow = this.attachShadow({ mode: 'open' });
        const content = this.content = document.createElement(tag);
        content.className = className;
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
            content.innerHTML = '<slot></slot>';
            shadow.appendChild(content);
        });
    }
    public static getStyles() {
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
        for (let i = cssTexts.length - 1; i--; i >= 0) {
            styles.insertRule(cssTexts[i], 0);
        }
        return Promise.resolve((rules.value as any) = styles.rules);
    } catch (err) {
        console.error(err);
        return Promise.reject();
    }
});