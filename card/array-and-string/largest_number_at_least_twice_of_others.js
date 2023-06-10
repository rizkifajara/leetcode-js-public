/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let big1 = big2 = ind = -1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > big1) {
            big2 = big1
            big1 = nums[i]
            ind = i
        } else if (nums[i] > big2) {
            big2 = nums[i]
        }
    }
    if(big1 >= 2 * big2) return ind
    
    return -1
};