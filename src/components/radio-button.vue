<template>
    <el-radio-button
        :active="isCheck"
        :size="size"
        :disabled="disabled"
        @click="onChange"
    >
        <input :name="name" type="radio" :checked="isCheck" />
        {{ value }}
    </el-radio-button>
</template>

<script lang="ts">
import { computed, ref, toRefs } from "vue";
import { Element } from "./component";
export default {
    props: {
        modelValue: {
            required: true,
            type: [String, Number, Object, Boolean],
        },
        value: {
            type: [String, Number, Object, Boolean],
            required: true,
        },
        size: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        name: String,
    },
    setup(props, { slots, emit }) {
        const { modelValue, value, disabled } = toRefs(props);
        const isCheck = computed(() => modelValue.value === value.value);
        const onChange = () => {
            if (!disabled.value) {
                emit("update:modelValue", value.value);
                emit("change", value.value);
            }
        };
        return {
            isCheck,
            onChange,
        };
    },
};
export class RadioButton extends Element {
    constructor() {
        super({ className: "el-radio-button" });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
    static get observedAttributes() {
        return ["size", "disabled", "active"];
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
            case "active":
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
.el-radio-button {
    position: relative;
    display: inline-flex;
    outline: none;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0;
    input[type="radio"] {
        margin: 0;
        padding: 0;
        width: 0;
        height: 0;
        visibility: hidden;
        outline: none;
        line-height: 0;
    }
}
.el-radio-button:first-child {
    border-left: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    box-shadow: none !important;
}
.el-radio-button:last-child {
    border-radius: 0 4px 4px 0;
}
.el-radio-button.is-active {
    color: #fff;
    background-color: var(--main-color);
    border-color: var(--main-color);
    box-shadow: -1px 0 0 0 var(--main-color);
}
.el-radio-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0;
}
.el-radio-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0;
}
.el-radio-button.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    box-shadow: none;
}
.el-radio-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0;
}
.el-radio-button.is-disabled.is-active {
    background-color: #f2f6fc;
}
</style>