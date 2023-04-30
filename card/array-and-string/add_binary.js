/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0
    let res = ""
    while(i >= 0 && j >= 0) {
        if (a[i] === '0' && b[j] === '0' && !carry) {
            res = '0'.concat(res)
        } else if (a[i] === '0' && b[j] === '0' && carry) {
            res = '1'.concat(res)
            carry = 0
        } else if (a[i] === '0' && b[j] === '1' && carry) {
            res = '0'.concat(res)
        } else if (a[i] === '1' && b[j] === '0' && carry) {
            res = '0'.concat(res)
        } else if (a[i] === '1' && b[j] === '1' && !carry) {
            res = '0'.concat(res)
            carry = 1
        } else if (a[i] === '1' && b[j] === '1' && carry) {
            res = '1'.concat(res)
        } else {
            res = '1'.concat(res)
        }
        i--
        j--
    }
    
    if(i >= 0) {
        while(i >= 0) {
            if(a[i] === '1' && carry) {
                res = '0'.concat(res)
            } else if (a[i] === '0' && !carry) {
                res = '0'.concat(res)
            } else {
                res = '1'.concat(res)
                carry = 0
            } 
            i--
        }
    } else if (j >= 0) {
        while(j >= 0) {
            if(b[j] === '1' && carry) {
                res = '0'.concat(res)
            } else if (b[j] === '0' && !carry) {
                res = '0'.concat(res)
            } else {
                res = '1'.concat(res)
                carry = 0
            } 
            j--
        }
    }
    if(carry) res = '1'.concat(res)
    
    return res
};