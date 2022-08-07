/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let rom = ['I','V','X','L','C','D','M']
    let num = [1,5,10,50,100,500,1000]
    
    let sum = 0
    for(let i = 0; i < s.length; i++) {
        let numIndex = num[rom.findIndex((x) => x == s[i])]
        if((rom.findIndex((x)=>x==s[i])) < (rom.findIndex((y)=>y==s[i+1]))) {
            sum -= numIndex
            continue;
        }
        sum += numIndex
    }
    
    return sum
};
    
