/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let ascii = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    
    let stackString = []
    
    for(let i = 0; i < s.length; i++) {
        console.log(s[i])
        if(!(s[i] in ascii)) {
            stackString.push(s[i])
            console.log(stackString)
        } else {
            
            if(stackString[stackString.length - 1] != ascii[s[i]]) {
               return false
               break
            }
            stackString.pop()
            console.log(stackString)
        }
    }
    
    if(stackString.length != 0) return false
    
    return true

};