/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = second = third = Number.NEGATIVE_INFINITY
   
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > first) {
            third = second
            second = first
            first = nums[i]
        } else if (nums[i] > second && nums[i] != first) {
            third = second
            second = nums[i]
        } else if (nums[i] > third && nums[i] != first && nums[i] != second) {
            third = nums[i]
        }
        console.log(first, second, third)
    }
    
    if(third === Number.NEGATIVE_INFINITY) {
        return first
    } else {
        return third
    }
};