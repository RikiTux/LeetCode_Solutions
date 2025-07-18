/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (const index in arr)
        arr[index] = fn(arr[index], parseInt(index));
    return arr;
};
