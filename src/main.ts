import { watchEffect, computed, watch, reactive, ref } from 'vue';
import './style/index.css';
import './components';
import { getRef } from './state';
window.dispatchEvent(
    new CustomEvent('init', {
        detail: {
            getRef,
            reactive,
            ref,
            watchEffect,
            computed,
            watch
        }
    })
);