const isAlienSorted = (words, order) => {
  const len = words.length;
  // iterate over words array
  for (let i = 0; i < len; i++) {
    const beg = words[i];
    for (let j = i + 1; j < len; j++) {
      const end = words[j];

      let currentPosition = 0;
      let begCharIdx = order.indexOf(beg[currentPosition]);
      let endCharIdx = order.indexOf(end[currentPosition]);

      // comparing same character, update to next one
      while (begCharIdx === endCharIdx) {
        currentPosition++;
        begCharIdx = order.indexOf(beg[currentPosition]);
        endCharIdx = order.indexOf(end[currentPosition]);
      }

      // compare index of first letter of first word with index of first letter of second word
      if (begCharIdx > endCharIdx) return false;
    }
  }
  return true;
};

let words = ['hello', 'leetcode'];
let order = 'hlabcdefgijkmnopqrstuvwxyz';

console.log(isAlienSorted(words, order));

let words2 = ['word', 'world', 'row'];
let order2 = 'worldabcefghijkmnpqstuvxyz';

console.log(isAlienSorted(words2, order2));

let words3 = ['apple', 'app'];
let order3 = 'abcdefghijklmnopqrstuvwxyz';

console.log(isAlienSorted(words3, order3));
