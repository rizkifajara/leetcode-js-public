/**
 * @param {number[]} heights
 * @return {number}
 */

const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

var heightChecker = function(heights) {
  
  const sorted = quickSort(heights)
  let unmatch = 0
  for(let i = 0; i < heights.length; i++) {
      if(heights[i] !== sorted[i]) {
          unmatch++
      }
  }
  
  return unmatch
};

