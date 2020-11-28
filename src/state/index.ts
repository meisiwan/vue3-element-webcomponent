import { reactive, watchEffect, computed } from "vue";

interface MyWindow extends Window {
    getRef?: (arg0: string) => Promise<any>;
}
export const refs = {} as Record<string, any>;
const got = {} as Record<string, any>, state = reactive({});
//获取data 只可获取一次
(window as MyWindow).getRef = (ref: string) => {
    if (!refs[ref]) return Promise.resolve(null);
    return new Promise((resolve, reject) => {
        if (!got[ref]) {
            got[ref] = true;
            resolve({ data: refs[ref], state, reactive, watchEffect, computed });
            refs[ref] = null;
        } else {
            resolve(null);
        }
    });
}