<template>
    <el-button
        :type="type"
        :size="size"
        :loading="!!loading"
        :disabled="disabled"
    >
        <i v-if="loading" class="el-icon-loading"></i>
        <i v-else-if="icon" :class="icon"></i>
        <slot v-if="!slots.default"></slot>
        <span v-else>
            <slot></slot>
        </span>
    </el-button>
</template>

<script lang='ts'>
import { Element } from "./component";
import { defineComponent } from "vue";
export default {
    props: {
        loading: Boolean,
        type: String,
        icon: String,
        size: String,
        disabled: Boolean,
    },
    setup(props, { slots }) {
        return { slots };
    },
};
export class Button extends Element {
    constructor() {
        super({ className: "el-button" });
    }
    connectedCallback() {
        this.classList.add(this.class);
        if (this.hasAttribute("plain")) {
            this.classList.add("is-plain");
        }
        if (this.hasAttribute("round")) {
            this.classList.add("is-round");
        }
        if (this.hasAttribute("circle")) {
            this.classList.add("is-circle");
        }
    }
    static get observedAttributes() {
        return ["type", "icon", "loading", "size", "disabled"];
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
            case "disabled":
            case "loading": {
                if (value == "true") {
                    classList.add("is-" + attr);
                } else if (value == "false") {
                    classList.remove("is-" + attr);
                }
                break;
            }
            default:
                break;
        }
    }
}
</script>

<style>
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid var(--main-border-color);
    color: var(--font-color);
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.el-button:hover,
.el-button:focus {
    color: var(--main-color);
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}

.el-button:active {
    color: var(--main-active-color);
    border-color: var(--main-active-color);
    outline: none;
}

.el-button--primary {
    color: var(--font-hover-color);
    background-color: var(--main-color);
    border-color: var(--main-color);
}

.el-button--primary:focus,
.el-button--primary:hover {
    background: var(--main-hover-color);
    border-color: var(--main-hover-color);
    color: var(--font-hover-color);
}

.el-button--primary.is-active,
.el-button--primary:active {
    background: var(--main-active-color);
    border-color: var(--main-active-color);
    color: var(--font-hover-color);
}

.el-button--success {
    color: var(--font-hover-color);
    background-color: var(--success-color);
    border-color: var(--success-color);
}

.el-button--success:focus,
.el-button--success:hover {
    background: var(--success-hover-color);
    border-color: var(--success-hover-color);
    color: var(--font-hover-color);
}

.el-button--success.is-active,
.el-button--success:active {
    background: var(--success-active-color);
    border-color: var(--success-active-color);
    color: var(--font-hover-color);
}

.el-button--info {
    color: var(--font-hover-color);
    background-color: var(--info-color);
    border-color: var(--info-color);
}

.el-button--info:focus,
.el-button--info:hover {
    background: var(--info-hover-color);
    border-color: var(--info-hover-color);
    color: var(--font-hover-color);
}

.el-button--info.is-active,
.el-button--info:active {
    background: var(--info-active-color);
    border-color: var(--info-active-color);
    color: var(--font-hover-color);
}

.el-button--warning {
    color: var(--font-hover-color);
    background-color: var(--warning-color);
    border-color: var(--warning-color);
}

.el-button--warning:focus,
.el-button--warning:hover {
    background: var(--warning-hover-color);
    border-color: var(--warning-hover-color);
    color: var(--font-hover-color);
}

.el-button--warning.is-active,
.el-button--warning:active {
    background: var(--warning-active-color);
    border-color: var(--warning-active-color);
    color: var(--font-hover-color);
}

.el-button--danger {
    color: var(--font-hover-color);
    background-color: var(--danger-color);
    border-color: var(--danger-color);
}

.el-button--danger:focus,
.el-button--danger:hover {
    background: var(--danger-hover-color);
    border-color: var(--danger-hover-color);
    color: var(--font-hover-color);
}

.el-button--danger.is-active,
.el-button--danger:active {
    background: var(--danger-active-color);
    border-color: var(--danger-active-color);
    color: var(--font-hover-color);
}

.el-button.is-plain:focus,
.el-button.is-plain:hover {
    background: #fff;
    border-color: var(--main-color);
    color: var(--main-color);
}

.el-button.is-active,
.el-button.is-plain:active {
    border-color: var(--main-active-color);
    color: var(--main-active-color);
}

.el-button.is-active,
.el-button.is-plain:active {
    border-color: var(--main-active-color);
    color: var(--main-active-color);
}

.el-button--primary.is-plain {
    color: var(--main-color);
    background: #ecf5ff;
    border-color: #b3d8ff;
}

.el-button--primary.is-plain:focus,
.el-button--primary.is-plain:hover {
    background: var(--main-color);
    border-color: var(--main-color);
    color: var(--font-hover-color);
}

.el-button--primary.is-plain:active {
    background: var(--main-active-color);
    border-color: var(--main-active-color);
    color: var(--font-hover-color);
    outline: none;
}

.el-button--success.is-plain {
    color: var(--success-color);
    background: var(--success-bg-color);
    border-color: var(--success-border-color);
}

.el-button--success.is-plain:focus,
.el-button--success.is-plain:hover {
    background: var(--success-color);
    border-color: var(--success-color);
    color: var(--font-hover-color);
}

.el-button--success.is-plain:active {
    background: var(--success-active-color);
    border-color: var(--success-active-color);
    color: var(--font-hover-color);
    outline: none;
}

.el-button--info.is-plain {
    color: var(--info-color);
    background: var(--info-bg-color);
    border-color: var(--info-border-color);
}

.el-button--info.is-plain:focus,
.el-button--info.is-plain:hover {
    background: var(--info-color);
    border-color: var(--info-color);
    color: var(--font-hover-color);
}

.el-button--info.is-plain:active {
    background: var(--info-active-color);
    border-color: var(--info-active-color);
    color: var(--font-hover-color);
    outline: none;
}

.el-button--warning.is-plain {
    color: var(--warning-color);
    background: var(--warning-bg-color);
    border-color: var(--warning-border-color);
}

.el-button--warning.is-plain:focus,
.el-button--warning.is-plain:hover {
    background: var(--warning-color);
    border-color: var(--warning-color);
    color: var(--font-hover-color);
}

.el-button--warning.is-plain:active {
    background: var(--warning-active-color);
    border-color: var(--warning-active-color);
    color: var(--font-hover-color);
    outline: none;
}

.el-button--danger.is-plain {
    color: var(--danger-color);
    background: var(--danger-bg-color);
    border-color: var(--danger-border-color);
}

.el-button--danger.is-plain:focus,
.el-button--danger.is-plain:hover {
    background: var(--danger-color);
    border-color: var(--danger-color);
    color: var(--font-hover-color);
}

.el-button--danger.is-plain:active {
    background: var(--danger-active-color);
    border-color: var(--danger-active-color);
    color: var(--font-hover-color);
    outline: none;
}

.el-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

.el-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}

.el-button [class*="el-icon-"] + span {
    margin-left: 5px;
}

.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}

.el-button--primary.is-disabled,
.el-button--primary.is-disabled:active,
.el-button--primary.is-disabled:focus,
.el-button--primary.is-disabled:hover {
    color: var(--font-hover-color);
    background-color: var(--main-disable-color);
    border-color: var(--main-disable-color);
}

.el-button--success.is-disabled,
.el-button--success.is-disabled:active,
.el-button--success.is-disabled:focus,
.el-button--success.is-disabled:hover {
    color: var(--font-hover-color);
    background-color: #b3e19d;
    border-color: #b3e19d;
}

.el-button--info.is-disabled,
.el-button--info.is-disabled:active,
.el-button--info.is-disabled:focus,
.el-button--info.is-disabled:hover {
    color: var(--font-hover-color);
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}

.el-button--warning.is-disabled,
.el-button--warning.is-disabled:active,
.el-button--warning.is-disabled:focus,
.el-button--warning.is-disabled:hover {
    color: var(--font-hover-color);
    background-color: #f3d19e;
    border-color: #f3d19e;
}

.el-button--danger.is-disabled,
.el-button--danger.is-disabled:active,
.el-button--danger.is-disabled:focus,
.el-button--danger.is-disabled:hover {
    color: var(--font-hover-color);
    background-color: #fab6b6;
    border-color: #fab6b6;
}

.el-button--primary.is-plain.is-disabled,
.el-button--primary.is-plain.is-disabled:active,
.el-button--primary.is-plain.is-disabled:focus,
.el-button--primary.is-plain.is-disabled:hover {
    color: var(--main-disable-plain-color);
    background-color: var(--main-disable-plain-bg-color);
    border-color: var(--main-disable-plain-border--color);
}

.el-button--success.is-plain.is-disabled,
.el-button--success.is-plain.is-disabled:active,
.el-button--success.is-plain.is-disabled:focus,
.el-button--success.is-plain.is-disabled:hover {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}

.el-button--info.is-plain.is-disabled,
.el-button--info.is-plain.is-disabled:active,
.el-button--info.is-plain.is-disabled:focus,
.el-button--info.is-plain.is-disabled:hover {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}

.el-button--warning.is-plain.is-disabled,
.el-button--warning.is-plain.is-disabled:active,
.el-button--warning.is-plain.is-disabled:focus,
.el-button--warning.is-plain.is-disabled:hover {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
}

.el-button--danger.is-plain.is-disabled,
.el-button--danger.is-plain.is-disabled:active,
.el-button--danger.is-plain.is-disabled:focus,
.el-button--danger.is-plain.is-disabled:hover {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
}

.el-button--text {
    border-color: transparent;
    color: var(--main-color);
    background: transparent;
    padding-left: 0;
    padding-right: 0;
}

.el-button--text:focus,
.el-button--text:hover {
    color: var(--main-hover-color);
    border-color: transparent;
    background-color: transparent;
}

.el-button--text:active {
    color: var(--main-active-color);
    background-color: transparent;
}

.el-button--text.is-disabled,
.el-button--text.is-disabled:focus,
.el-button--text.is-disabled:hover,
.el-button--text:active {
    border-color: transparent;
}

.el-button.is-loading {
    position: relative;
    pointer-events: none;
}

.el-button.is-loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0, 0%, 100%, 0.35);
}

.el-button.el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.el-button--medium.is-round {
    border-radius: 18px;
}

.el-button.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.el-button--small.is-round {
    border-radius: 16px;
}

.el-button.el-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.el-button--mini.is-round {
    border-radius: 14px;
}
</style>
