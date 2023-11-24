export const groupBy = (array, callbackFn) => {
    return array.reduce((acc, item) => {
        const key = callbackFn(item);
        (acc[key] ||= []).push(item);
        return acc;
    }, {});
};