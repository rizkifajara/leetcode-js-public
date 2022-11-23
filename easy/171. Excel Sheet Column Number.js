/**
 * @param {string} columnTitle
 * @return {number}
 * 
 * 
 * contoh rumus: ZY
 * 26^1 * 26 + 25
 */
 var titleToNumber = function(columnTitle) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let sum = 0
  for(let i = columnTitle.length; i > 0; i--) {
      sum += Math.pow(26, columnTitle.length-i) * (alphabet.indexOf(columnTitle[i-1])+1)
  }
                      
  return sum
};