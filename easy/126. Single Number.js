/**
 * @param {number[]}
 * @return {number}
 */
 var singleNumber = function(nums) {
  let i = 0;
  while(true) {
      console.log(nums)
      if(nums[i]==null) {
          i++
          continue
      }
      
      let temp = nums[i]
      nums[i] = null
      let index = nums.indexOf(temp)
      console.log('index:'+index)
      if(index == -1) {
          return temp
      } 
      
      nums[index] = null
      i++
  }
};