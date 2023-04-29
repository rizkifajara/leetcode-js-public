/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    let new_arr = []
    let l = 0;
    let r = nums.length - 1
    for(let i = nums.length - 1; i >= 0; i--) {
        if(Math.abs(nums[l]) > Math.abs(nums[r])) {
            new_arr[i] = nums[l] * nums[l]
            l++
        } else {
            new_arr[i] = nums[r] * nums[r]
            r--
        }
    }
    return new_arr
};