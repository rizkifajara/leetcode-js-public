/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    function countStep(num) {
        if (num == 0) return 0
        if (num % 2 == 0) {
            console.log(num + " is even; divide by 2 and obtain "+num/2)
            return 1+countStep(num / 2)
        } else {
            console.log(num + " is odd; substract by 1 and obtain "+(num-1))
            return 1+countStep(num - 1)
        }
    }
    
    return countStep(num)
};