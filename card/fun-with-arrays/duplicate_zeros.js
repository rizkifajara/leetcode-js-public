/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const initialArrLength = arr.length
    for(let i = 0; i < initialArrLength; i++) {
        if(arr[i] === 0) {
            for(let j = initialArrLength; j > i; j--) {
                arr[j+1] = arr[j]
            }
            arr[i+1] = 0
            i++
        }   
    }
    
    if(initialArrLength < arr.length) {
        for(let i = initialArrLength; i <= arr.length; i++) {
            arr.pop()
        } 
    }
    
};