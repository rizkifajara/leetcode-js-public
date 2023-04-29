/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let z = 0
    for(let i = 0; i < nums.length - z; i++) {
        if(nums[i] === 0) {
            
            for(let j = i; j < nums.length - z; j++) {
                nums[j] = nums[j+1]
            }
            z++
            i--
        }
    }
    
    for(let i = nums.length - z; i < nums.length; i++) {
        nums[i] = 0
    }
    
    console.log(nums)
    
};