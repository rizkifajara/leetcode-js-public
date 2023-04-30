/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = new Array(matrix.length * matrix[0].length)
    let i = row = col = cycle = 0
    let right = true
    let down = left = up = false
    
    while(i < res.length) {
        if(right){
            while(col < matrix[0].length - cycle && i < res.length) {
                res[i++] = matrix[row][col]
                col++
            }
            col--
            row++
            right = false
            down = true
            
        } else if (down) {
            while(row < matrix.length - cycle && i < res.length) {
                res[i++] = matrix[row][col]
                row++
            }
            row--
            col--
            down = false
            left = true
            
        } else if (left) {
            while(col >= 0 + cycle && i < res.length) {
                res[i++] = matrix[row][col]
                col--
            }
            col++
            row--
            left = false
            up = true
            cycle++
        } else if (up) {
            while(row >= 0 + cycle && i < res.length) {
                res[i++] = matrix[row][col]
                row--
            }
            row++
            col++
            up = false
            right = true
        }
        
    }
    return res
    
};