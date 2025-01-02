const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesCount = {};
  const result = [];
  for (const name of names) {
      if (result.includes(name)) {
        namesCount[name] = (namesCount[name] || 0) + 1;
        result.push(`${name}(${namesCount[name]})`);
      } else {
        result.push(name);
      }
    }
  console.log(namesCount);
  console.log(result);
  return result;
}

module.exports = {
  renameFiles
};
renameFiles(["file", "file", "image", "file(1)", "file"])