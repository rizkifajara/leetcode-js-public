/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let res = new Array(mat.length * mat[0].length);
    let upward = true
    let row = col = 0
    
    while(row < mat.length && col < mat[0].length) {
        if(upward) {
            while(row > 0 && col < mat[0].length - 1) {
                // increase col, decrease row if upward
                res[i++] = mat[row][col]
                row--
                col++
            }
            // edge of upward
            res[i++] = mat[row][col]
            if(col === mat[0].length - 1) {
                // increment row if upward and max col
                row++
            } else {
                // otherwise increase col
                col++
            }
            
        } else {
            while(row < mat.length - 1 && col > 0) {
                // increase row, decrease col if downward
                res[i++] = mat[row][col]
                row++
                col--
            }
            // edge of downward
            res[i++] = mat[row][col]
            if(row === mat.length - 1) {
                // increase col if downward and last row
                col++
            } else {
                row++
            }
        }
        
        upward = !upward
    }
    
    return res
};