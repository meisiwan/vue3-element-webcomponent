
const refs = {} as Record<string, any>;
export const setRef = (ref: string, value: any) => {
    refs[ref] = value;
}
export const _getRef = (ref: string) => {
    return refs[ref];
}

export const getRef = (ref: string) => {
    return new Promise((resolve, reject) => {
        const res = refs[ref];
        if (res) {
            refs[ref] = [1, 1, 2];
            resolve(res);
        } else {
            reject(new Error('no ref ' + ref));
        }
    });
}




