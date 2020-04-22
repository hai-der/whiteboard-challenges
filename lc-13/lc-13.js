var romanToInt = function (s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  // check for subtraction cases
  if (s.indexOf('IV') != -1) num -= 2;
  if (s.indexOf('IX') != -1) num -= 2;
  if (s.indexOf('XL') != -1) num -= 20;
  if (s.indexOf('XC') != -1) num -= 20;
  if (s.indexOf('CD') != -1) num -= 200;
  if (s.indexOf('CM') != -1) num -= 200;
  // add all symbols
  for (let i = 0; i < s.length; i++) {
    num += dict[s[i]];
  }
  return num;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
