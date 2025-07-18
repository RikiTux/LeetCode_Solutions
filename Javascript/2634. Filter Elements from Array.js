/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let res = [];
    for (const n in arr) {
        if (fn(arr[n], parseInt(n)))
            res.push(arr[n]);
    }
    return res;
};
