<template>
    <slot></slot>
</template>

<script lang="ts">
import { Element } from "./component";
import { computed, h, toRefs, VNode } from "vue";
export default {
    props: {
        modelValue: {
            required: true,
            type: [String, Number, Object, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "",
        },
        name: String,
    },
    setup(props, { slots, emit }) {
        const { modelValue, disabled, size, name } = toRefs(props);
        //如果插槽render函数不存在
        if (!slots.default || !modelValue) return;
        const vNodes: VNode[] = slots.default();
        return () => {
            //执行render函数获取vnodes， 根据vnode生成全新的vnode
            return h(
                "el-radio-group",
                vNodes.map((vnode) => {
                    const props: Record<string, any> = vnode.props || {};
                    let isDisabled = props.hasOwnProperty("disabled");
                    return h(vnode, {
                        modelValue: modelValue.value,
                        disabled: isDisabled ? props.disabled : disabled.value,
                        size: size?.value,
                        name: name?.value,
                        "onUpdate:modelValue": (v: any) => {
                            emit("update:modelValue", v);
                            emit("change", v);
                        },
                    });
                })
            );
        };
    },
};

export class RadioGroup extends Element {
    constructor() {
        super({ className: "el-radio-group" });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        const name = this.class;
        const classList = this.classList;
        switch (attr) {
            case "size": {
                classList.remove(name + "--" + oldValue);
                classList.add(name + "--" + value);
                break;
            }
            case "disabled":
                if (value == "true") {
                    classList.add("is-" + attr);
                } else if (value == "false") {
                    classList.remove("is-" + attr);
                }
                break;
            default:
                break;
        }
    }
}
</script>
<style lang="scss">
.el-radio-group {
    display: inline-flex;
}
</style>