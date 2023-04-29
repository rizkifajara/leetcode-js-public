/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0
    let j = 0
    while(i < nums.length) {
        if(nums[i] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j],nums[i]]
            j += 1
        }
        i += 1
    }
    
    return nums
};