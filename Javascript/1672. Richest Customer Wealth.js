/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(let i = 0; i < accounts.length; i++) {
        let res = accounts[i].reduce(function (a, b) {
            return a + b;
        }, 0);
        if (res > max)
            max = res;
    }
    return max;
};
