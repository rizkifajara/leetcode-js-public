/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let k = 0
    let length = nums.length
    for(let i = 0; i < length; i++) {
        if(!nums.includes(i+1)) {
            nums.unshift(i+1)
            k++
        }
    }
    nums.length = k
    
    return nums
};