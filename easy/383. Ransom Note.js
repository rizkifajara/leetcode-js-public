/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    // let substr = ransomNote.split('').sort().join("")
    // let str = magazine.split('').sort().join("")
    
    for(let i = 0; i < ransomNote.length; i++) {
        let tempIndex = magazine.indexOf(ransomNote[i])
        if(tempIndex != -1) {
            console.log(i)
            magazine = magazine.slice(0, tempIndex) + magazine.slice(tempIndex+1)
            continue;
        }
        return false
    }
    
    return true
};