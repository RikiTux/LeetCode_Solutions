/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    if (size === 0) return arr;
    if (!arr.length) return [];
    if (size >= arr.length) return [arr];

    let res = [], tmp = [];
    for (const x of [...arr.keys(arr.length)]) {
        tmp.push(arr[x]);
        if (tmp.length === size || x === arr.length-1) {
            res.push(tmp);
            tmp = [];
        }
    }
    return res;
};
