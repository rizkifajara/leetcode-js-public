/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums[0] === target) return 1
    let minLength = Infinity
    let sum = 0
    let i = j = 0
    while(j <= nums.length) {
        if(sum < target) {
            sum += nums[j]
            j++
        } else {
            sum = sum-nums[i]
            if(j-i < minLength) {
                minLength = j-i
            }
            i++
        }
    }
    if(minLength === Infinity) return 0
    return minLength
};