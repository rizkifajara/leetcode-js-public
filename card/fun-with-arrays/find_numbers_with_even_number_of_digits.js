/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenDigit = 0
    for(let i = 0; i < nums.length; i++) {
        let count = 0
        while(nums[i] >= 1) {
            nums[i] = nums[i] / 10
            count++
            console.log("nums: "+nums[i])
            console.log("count: "+count)
        }
        if(count % 2 == 0) {
            evenDigit++
        }
    }
    
    return evenDigit
};