/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let output = ""
    let breakcheck = false
    for(let j = 0; j < strs[0].length; j++) {
        console.log(strs[0][j])
        for(let i = 1; i < strs.length; i++) {
            if(strs[i][j] != strs[0][j]) {
                breakcheck = true
                break;
            }
        }
        if (breakcheck) {return output}
        output+=strs[0][j]
    }
    return output
};