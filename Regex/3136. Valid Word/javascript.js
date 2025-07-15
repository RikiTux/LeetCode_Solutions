/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    return /^(?=.*[aeiou])(?=.*[b-df-hj-np-tv-z])(?=.*\d)?[a-z\d]{3,}$/i.test(word);
};
