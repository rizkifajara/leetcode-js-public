/**
 * @param {number} n
 * @return {number}
 */

// Basically, memoization is used to improve performance 
// when dealing with recursive, instead of doing every one of the iteration,
// we store the result from iteration that we've already processed.

 let memo = [0,1]

 function fib(x) {
     //  even if 0 and 1 are in memo, it's faster to make special cases
     //  of if rather than check if it's in the memo
     if (x <= 1) return x
     //  check if fib(x) is already calculated 
     if (x in memo) return memo[x]
     //  store the fibonacci logic in a var, store it to memo, then return it
     let curr = fib(x-1) + fib(x-2)
     memo[x] = curr
     return curr
     
 }
 var climbStairs = function(n) {
     
     // n+1 because fibonacci sequence starts from 0
     return fib(n+1)
     
 };