/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let down = false
    if(arr.length < 3) {
        return false
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i-1] && !down) {
            continue
        } else if (arr[i] < arr[i-1] && !down && i!=1) {
            down = true
            continue
        } else if (arr[i] < arr[i-1] && down) {
            continue
        } else {
            return false
        }
    }
    
    if(down === false) {
        return false
    }
    
    return true
};