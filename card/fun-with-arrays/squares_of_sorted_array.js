/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    
    // compare function     
    let sorted_nums = nums.sort(function(a, b) {
    // if result is negative, a will be sorted before b
    // if result positive, a will be sorted after b
    // if result 0, no changes
        return a - b
    })
    
    return sorted_nums
    
};