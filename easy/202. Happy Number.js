/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    
  let map = new Map()
  
  while(true) {
      let sum = 0
      for (let i = 0; i < n.toString().length; i++) {
          sum += Math.pow(parseInt(String(n)[i]), 2)
      }
      
      if(sum == 1) {
          return true
      }
      
      if(map.has(sum)) {
          return false
      }
      
      map.set(sum, 1)
      
      n = sum
      
  }
  
  return false
};