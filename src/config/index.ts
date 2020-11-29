export const evalTemp = (template: string, data: Record<string, any>) => {
    return new Function(`with(this) return ${template};`).call(data);
}