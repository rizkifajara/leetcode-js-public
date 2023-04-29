/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let pointer1l = m-1
    let pointer1r = m+n-1
    let pointer2 = n-1
    
    while(pointer2 >= 0 && pointer1l >= 0) {
        if(nums2[pointer2] > nums1[pointer1l] ) {
            nums1[pointer1r] = nums2[pointer2]
            pointer2--
        } else {
            nums1[pointer1r] = nums1[pointer1l]
            pointer1l--
        }
        pointer1r--
    }
    
    if(pointer2 >= 0 && pointer1l < 0) {
        for(let i = 0; i < pointer2+1; i++) {
            nums1[i] = nums2[i]
        }
    }
};