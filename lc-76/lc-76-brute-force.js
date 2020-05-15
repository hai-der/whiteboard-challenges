/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const counter = str => {
    return str.split('').reduce((map,letter) => {
        map[letter] ? map[letter]++ : map[letter] = 1;
        return map;
    }, {})
}


const subStrContainsT = (s, t) => {
    const map = counter(t);
    let totalCount = Object.keys(map).length;
    // decrement map for each letter you see
    for(let i in s) {
        let ch = s[i];

        if (map[ch]) {
            map[ch]--;
        }

        // if none left in map decrement from totalCount
        if (map[ch] === 0) { 
            delete map[ch];
            totalCount--;
        }
    }

    // if totalCount is zero, return true
    if (totalCount === 0) return true;
    return false;
}

var minWindow = function(s, t) {
    const len = s.length;
    const subStrList = [];
    let minWindowLen = 999999999;
    let minWindowStr = '';
    // const map = counter(s);
    // find all substrings
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len; j++) {
            let subStr = s.substr(i, j-i+1);
            subStrList.push(subStr);
        }
    }
    // check each substring for characters in T
    for(let i = 0; i < subStrList.length; i++) {
        let sub = subStrList[i];
        if (subStrContainsT(sub, t)) {
            if (sub.length < minWindowLen) {
                minWindowLen = sub.length;
                minWindowStr = sub;
            }
        }
    }
    return minWindowStr;
};

const s = 'ADOBECODEBANC';
const t = 'ABC';
// console.log(minWindow(s, t));
console.log(subStrContainsT('bb', 'ab'));