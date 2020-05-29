const reverseChars = (str, start, end) => {
  // reverse all characters in the array
  while (end >= start) {
    let temp = str[end];
    str[end] = str[start];
    str[start] = temp;
    start++;
    end--;
  }
};

const reverseWords = (message) => {
  reverseChars(message, 0, message.length - 1);
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverseChars(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  return message.join('');
};

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l',
];

console.log(reverseWords(message));
