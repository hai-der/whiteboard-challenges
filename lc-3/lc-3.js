const allUnique = (s) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if you don't see it, add it
    if (map[char]) return false;
    else map[char] = true;
  }
  return true;
};

const lengthOfLongestSubstring = (s) => {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subStr = s.substr(i, j - i + 1);
      if (allUnique(subStr)) {
        length = Math.max(length, subStr.length);
      }
      //   console.log(i, s[i], j, s[j]);
    }
  }
  return length;
};

// printAllSubStr('abc');
//a
//b
//c
//ab
//bc
//abc

console.log(lengthOfLongestSubstring('PWWKEW'));
