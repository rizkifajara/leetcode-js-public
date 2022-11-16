/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let out = []
  let j = 0
  let k = 0
  for(let i = 0; i < m+n; i++) {
      
      if(j == m) {
          out[i] = nums2[k]
          k++
          continue
      }
      
      if(k == n) {
          out[i] = nums1[j]
          j++
          continue
      }
      if(nums1[j] < nums2[k]) {
          out[i] = nums1[j]
          j++
      } else {
          out[i] = nums2[k]
          k++
      }
  }
  
  for(let i = 0; i < m+n; i++) {
      nums1[i] = out[i]
  }
};