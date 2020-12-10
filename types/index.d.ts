declare module '*.css' {
    const content: any;
    export default content;
}
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
    export const Radio: CustomElementConstructor;
    export const Button: CustomElementConstructor;
    export const Link: CustomElementConstructor;
    export const RadioGroup: CustomElementConstructor;
    export const RadioButton: CustomElementConstructor;
}