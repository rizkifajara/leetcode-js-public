/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let start = -1
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            start = i
            for(let j = 0; j < needle.length; j++) {
                if(haystack[i+j] != needle[j]) {
                    start = -1
                    break
                }
            }
            if(start != -1) return start
        }
    }
    
    return start
};