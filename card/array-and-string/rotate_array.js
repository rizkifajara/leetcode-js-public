/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    nums.length = nums.length + k
    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i] = nums[i-k]
    }
    for(let i = 0; i < k; i++) {
        nums[i] = nums[nums.length - k + i]
    }
    nums.length = nums.length - k
};