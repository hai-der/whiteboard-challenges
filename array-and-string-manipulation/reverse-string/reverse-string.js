const reverse = (s) => {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    let temp = s[rightIndex];
    s[rightIndex] = s[leftIndex];
    s[leftIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return s.join('');
};

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
