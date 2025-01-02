const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = n.toString();
  let maxNum = 0;

  for (let i = 0; i < strNum.length; i++) {
    // Создаем новую строку, в которой удалена одна цифра
    const numWithoutDigit = parseInt(strNum.replace(strNum[i], ''));
    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }

  return maxNum;
}


module.exports = {
  deleteDigit
};
