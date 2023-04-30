/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    res = ""
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[j-1][i]) {
                return res
            }
        }
        res = res.concat(strs[0][i])
    }
    
    return res
};