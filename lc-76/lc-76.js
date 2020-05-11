/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    // build char frequency of T
    const map = t.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {})
    // set count 
    let len = Number.MAX_SAFE_INTEGER;
    let ans = "";
    let count = Object.keys(map).length;
    let beg = 0;
    let end = 0;

    // loop over word
    while (end < s.length) {
        let endChar = s[end];
        // if its in map decrement the frequency
        if (map.hasOwnProperty(endChar)) {
            map[endChar]--;
            
            // if frequency is zero reduce count
            if (map[endChar] === 0) {
                count--;
            }
        }
        end++; 
        
        // if count is zero, you have a valid answer IFF answer is better than current one
        while (count === 0) {
            let subStr = s.substr(beg, end-beg);
            if (subStr.length < len) {
                len = subStr.length;
                ans = subStr;
            }
            // when you have valid answer, try minimizing by incrementing beg
            let startChar = s[beg];
            if (map.hasOwnProperty(startChar)) {
                map[startChar]++;
                if (map[startChar] > 0) count++;
            }
            beg++;

            // if its not in table great, you have a valid minimized window
            // if it is, increment count and frequency in table and keep moving end
        }
    }
    return ans;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));