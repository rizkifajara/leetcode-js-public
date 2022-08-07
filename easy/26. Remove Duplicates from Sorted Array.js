/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let curr = null
    for(let i = nums.length; i >= 0; i--) {
        if(curr != nums[i]) {
            curr = nums[i]
            continue
        }
        nums.splice(i, 1)
    }
    
    return nums.length
    
};