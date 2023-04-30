/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = new Array(numRows)
    for(let i = 0; i < numRows; i++) {
        let rows = new Array(i+1)
        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                rows[j] = 1
            } else {
                rows[j] = res[i-1][j-1] + res[i-1][j]
            }
        }
        res[i] = rows
    }
    
    return res
};