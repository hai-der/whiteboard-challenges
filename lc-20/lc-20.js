/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return true;

  const stack = [];
  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mapping.hasOwnProperty(char)) {
      const topElement = stack[stack.length - 1];
      // ensure there's a matching opening bracket
      if (mapping[char] === topElement) {
        stack.pop();
      } else return false; // incorrect order
    } else {
      stack.push(char); // new opening bracket
    }
  }

  return !(stack.length > 0);
};

console.log(isValid(''));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
