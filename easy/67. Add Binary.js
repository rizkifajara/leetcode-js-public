/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let max = Math.max(a.length, b.length)
    let carry = 0
    let res = ''
    let val = 0
    
    for(let i = 0; i < max; i++) {
        // add or 0 for padding on the lesser side
        val = Number(a[a.length - 1 - i] || 0) 
            + Number(b[b.length - 1 -i] || 0) 
            + carry
        // define carry over value for binary       
        carry = Math.floor(val / 2)
        // concatenate string result with mod operator   
        res = (val % 2) + res
    }
    
    // check if there is still a carry, then concatenate 1    
    if (carry) res = 1 + res
    
    return res
};