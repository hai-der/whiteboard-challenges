const longestCommonPrefix = (strs) => {
  // if empty array return empty string
  if (!strs.length) return '';

  // set arbitrary word
  let prefix = strs[0];

  // horizontally scan
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // find common prefix between subset of strings, minimizing window if no match
      prefix = prefix.substring(0, prefix.length - 1);
    }
    // if prefix empty, no common string found
    if (prefix.length === 0) return '';
  }
  return prefix;
};

const ex1 = [];
const ex2 = ['flower', 'flow', 'flight'];
const ex3 = ['dog', 'racecar', 'car'];
const ex4 = ['c', 'acc', 'ccc'];

console.log(longestCommonPrefix(ex1));
console.log(longestCommonPrefix(ex2));
console.log(longestCommonPrefix(ex3));
console.log(longestCommonPrefix(ex4));
