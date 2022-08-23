/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // duplicate array   
    let tempNums = nums.slice()
    
    for (let i = 0; i < nums.length; i++) {
    // posisi index 1 ditentukan oleh length - k
    // k mod length jika k > length, agar tidak negatif
        nums[i] = tempNums[(nums.length - (k % nums.length) + i) % nums.length]
    }
    
};