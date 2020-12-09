<template>
    <el-radio
        :size="size"
        :disabled="disabled"
        :checked="isCheck"
        @click="onChange"
    >
        <input type="radio" :checked="isCheck" />
        <span :class="'el-radio__inner'"></span>
        <span class="el-radio__label">
            <slot></slot>
        </span>
    </el-radio>
</template>
<script lang="ts">
import { computed, ref, toRefs, watch } from "vue";
import { Element } from "./component";
export default {
    props: {
        modelValue: {
            required: true,
            type: [String, Number, Object],
        },
        value: {
            type: [String, Number, Object],
            required: true,
        },
        size: String,
        disabled: Boolean,
    },
    setup(props, { slots, emit }) {
        const { modelValue, value, disabled } = toRefs(props);
        const isCheck = computed(() => modelValue.value === value.value);
        watch(isCheck, () => {});
        const onChange = () => {
            if (!disabled.value) {
                emit("update:modelValue", value.value);
            }
        };
        return {
            isCheck,
            onChange,
        };
    },
};

export class Radio extends Element {
    constructor() {
        super({ className: "el-radio" });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
    static get observedAttributes() {
        return ["size", "disabled", "checked"];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        const name = this.class;
        const classList = this.classList;
        switch (attr) {
            case "type":
            case "size": {
                classList.remove(name + "--" + oldValue);
                classList.add(name + "--" + value);
                break;
            }
            case "checked":
            case "border":
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

<style lang='scss' >
.el-radio {
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    margin-right: 30px;
    display: inline-flex;
    color: var(--font-color);
    cursor: pointer;
    display: inline-flex;
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
.el-radio__inner {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
    }
}
.el-radio.is-checked .el-radio__inner {
    border-color: var(--main-color);
    background: var(--main-color);
    &:after {
        transform: translate(-50%, -50%) scale(1);
    }
}
.el-radio__label {
    padding-left: 10px;
}
.el-radio.is-checked .el-radio__label {
    color: var(--main-color);
}
.el-radio.is-disabled .el-radio__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    cursor: not-allowed;
}
.el-radio.is-disabled .el-radio__inner:after {
    cursor: not-allowed;
    background-color: #f5f7fa;
}
.el-radio.is-disabled.is-checked .el-radio__inner:after {
    background-color: #c0c4cc;
}
.el-radio.is-disabled .el-radio__label {
    color: #c0c4cc;
    cursor: not-allowed;
}
.el-radio.is-border.is-checked {
    border-color: var(--main-color);
}

.el-radio.is-border {
    padding: 12px 20px 0 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    height: 40px;
}
</style>