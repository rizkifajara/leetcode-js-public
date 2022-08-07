/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let arrSum = [];
    for(let i = 0; i < accounts.length; i++) {
        let tempSum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            tempSum += accounts[i][j];
        }
        arrSum.push(tempSum);
    }
    let max = arrSum[0];
    for(let x = 0; x < arrSum.length; x++) {
        if(max < arrSum[x]) {
            max = arrSum[x]
        }
    }
    
    return max
};