/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        let sumLeft = 0
        let sumRight = 0
        for(let l = 0; l < i; l++) {
            sumLeft += nums[l]
        }
        for(let r = i+1; r < nums.length; r++) {
            sumRight += nums[r]
        }
        if(sumLeft === sumRight) return i
    }
    
    return -1
};