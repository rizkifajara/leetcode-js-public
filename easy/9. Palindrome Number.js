/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    arrayNum = Array.from(String(x), Number)
    let i = 0
    let j = arrayNum.length - 1
    while(true && j >= 0) {
        if (arrayNum[i] != arrayNum[j]) {
            return 0
        }
        
        i++
        j--
    }
    return 1
};