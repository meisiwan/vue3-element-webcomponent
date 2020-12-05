<template>
    <el-link
        :type="type"
        :disabled="disabled"
        :underline="!disabled && underline"
    >
        <a v-if="href" :href="href" :target="target">
            <i v-if="icon" :class="icon"></i>
            <span v-if="icon"><slot></slot></span>
            <slot v-else></slot>
        </a>
        <template v-else>
            <i v-if="icon" :class="icon"></i>
            <span v-if="icon"><slot></slot></span>
            <slot v-else></slot>
        </template>
    </el-link>
</template>
<script lang="ts">
import { Element } from "./component";
export default {
    props: {
        href: String,
        type: {
            type: String,
            default: "default",
        }, // [primary, success, warning, danger, info]
        icon: String,
        disabled: Boolean,
        target: String,
        underline: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { slots }) {
        return { slots };
    },
};
export class Link extends Element {
    constructor() {
        super({
            className: "el-link",
        });
    }
    connectedCallback() {
        this.classList.add(this.class);
    }
    static get observedAttributes() {
        return ["type", "icon", "loading", "underline", "disabled"];
    }
    attributeChangedCallback(attr: string, oldValue: string, value: string) {
        const name = this.class;
        const classList = this.classList;
        switch (attr) {
            case "type": {
                classList.remove(name + "--" + oldValue);
                classList.add(name + "--" + value);
                break;
            }
            case "loading":
            case "disabled":
            case "underline": {
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
.el-link {
    font-size: 14px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
}

.el-link a {
    padding: 0;
    color: inherit;
    outline: none;
    text-decoration: none;
}

.el-link.is-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid currentColor;
}

.el-link.el-link--default:after {
    border-color: currentColor;
}

.el-link.el-link--default {
    color: var(--font-color);
}

.el-link.el-link--default:hover {
    color: var(--main-color);
}

.el-link.el-link--primary {
    color: var(--main-color);
}

.el-link.el-link--success {
    color: var(--success-color);
}

.el-link.el-link--success:hover {
    color: var(--success-hover-color);
}

.el-link.el-link--warning {
    color: var(--warning-color);
}

.el-link.el-link--warning:hover {
    color: var(--warning-hover-color);
}

.el-link.el-link--danger {
    color: var(--danger-color);
}

.el-link.el-link--danger:hover {
    color: var(--danger-hover-color);
}

.el-link.el-link--info {
    color: var(--info-color);
}

.el-link.el-link--info:hover {
    color: var(--info-color);
}

.el-link.is-disabled {
    cursor: not-allowed;
}

.el-link.el-link--default.is-disabled {
    color: #c0c4cc;
}

.el-link.el-link--primary.is-disabled {
    color: var(--main-disable-color);
}

.el-link.el-link--success.is-disabled {
    color: var(--success-disable-color);
}

.el-link.el-link--warning.is-disabled {
    color: var(--warning-disable-color);
}

.el-link.el-link--danger.is-disabled {
    color: var(--danger-disable-color);
}

.el-link.el-link--info.is-disabled {
    color: var(--info-disable-color);
}

.el-link [class*="el-icon-"] + span {
    margin-left: 5px;
}
</style>