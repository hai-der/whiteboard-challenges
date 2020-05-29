/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const createCharMap = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }
  return map;
};

const isAnagram = (p, map) => {
  // unequal # of characters
  if (p.length !== Object.keys(map).length) return false;
  let anagramMap = createCharMap(p);
  const keys = Object.keys(anagramMap);
  for (let i = 0; i < keys.length; i++) {
    if (anagramMap[i] !== map[i]) return false;
  }
  return true;
};

var findAnagrams = function (s, p) {
  const map = createCharMap(p);
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let window = s.slice(i, i + p.length);
    if (isAnagram(window, map)) {
      result.push(i);
    }
  }
  return result;
};

const s = 'cbaebabacd';
const p = 'abc';

console.log(isAnagram('cba', { a: true, b: true, c: true }));
findAnagrams(s, p);

console.log(createCharMap('abc'));
