/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    
    let sums = [];
    
    
    for(let i = 0; i < nums.length; i++) {
        let tempSum = 0;
        for(let j = 0; j <= i; j++) {
            tempSum = tempSum + nums[j]
            
        }
        sums[i] = tempSum
    }
    return sums;
    
    
};

runningSum([1,2,3,4])