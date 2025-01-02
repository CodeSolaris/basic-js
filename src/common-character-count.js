const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
const commonChar = [];
let commonCharCount = 0;
const min = (a, b) => a < b ? a : b;
const count = (char, str) => str.split(char).length - 1;
  for (const char of s1) {
    if (s2.includes(char) && !commonChar.includes(char)) {
      commonChar.push(char);
      commonCharCount += min(count(char, s1), count(char, s2));
    }
  }
return commonCharCount;
}

module.exports = {
  getCommonCharacterCount
};
