/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  for(let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
};

console.log(primeTester(10))
console.log(primeTester(1))
console.log(primeTester(2))
console.log(primeTester(17))

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

const primeList = (b, e) => {
  let nums = Array(e).fill(true)
  for (let i = 1; i <= Math.sqrt(e); i++) {
    if (nums[i]) {
      for (let j = (i + 1) * 2; j <= e; j+=(i + 1)) {
        nums[j - 1] = false
      }
    }
  }
  console.log(nums)
  let reduced = nums.reduce((list, v, i) => {
    if (v)
      list.push(i + 1)
    return list
  }, []).filter(v => v >= b)
  return reduced
}

console.log(primeList(1, 10))
console.log(primeList(5, 10))
console.log(primeList(5, 11))