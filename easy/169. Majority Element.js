/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let counter = new Map()
  
  for(let i = 0; i < nums.length; i++) {
      if(counter.get(nums[i]) === undefined) {
         counter.set(nums[i], 1)
         continue
      }
  
      counter.set(nums[i], counter.get(nums[i])+1)
  }

  console.log(counter)
  
  let max = Math.max(...counter.values())    
  for (let [key, value] of counter.entries()) {
      if (value === max) {
        return key;
      }
  }
};