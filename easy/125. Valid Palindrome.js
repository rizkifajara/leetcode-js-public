/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let replaced = s.replace(/[^a-z0-9]/gi, '')
  let replaced2 = replaced.toLowerCase()
  let isPalindrome = true
  for(let i = 0; i < s.length; i++) {
      console.log(replaced2[i], replaced2[replaced2.length - i - 1])
      if(replaced2[i] != replaced2[replaced2.length - i - 1]) {
          isPalindrome = false
      }
      
  }
  
  return isPalindrome
};