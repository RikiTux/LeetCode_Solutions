/**
 * @param {number[]} nums
 * @return {number}
 */
// I have another solution using a bitwise operator, but I don't have time now.
// i need to work on this problem
var maximumLength = function (nums) {
    let res = 0;
    const patterns = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
    ];
    for (const pattern of patterns) {
        let cnt = 0;
        for (const num of nums) {
            if (num % 2 === pattern[cnt % 2]) {
                cnt++;
            }
        }
        res = Math.max(res, cnt);
    }
    return res;
};
