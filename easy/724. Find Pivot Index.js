/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let x = 0; x < i; x++) {
            // console.log(x + " left")
            leftSum += nums[x];
            // console.log("leftsum: " + leftSum)
        }
        
        for (let y = i+1; y < nums.length; y++) {
            // console.log(y + " right")
            rightSum += nums[y];
            // console.log("rightsum: "+ rightSum)
        }
        
        console.log(leftSum+ " " + rightSum);
        if (leftSum == rightSum) {
            return i;
        }
        
        if (i == nums.length - 1) {
            return -1;
        }
        
    }
    
};
