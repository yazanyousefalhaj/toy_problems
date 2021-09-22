/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */

function collatzSeq () {
    let max = 0;
    for (let x = 1; x < 1000000; x++) {
        let n = x;
        let currentLength = 1
        while (n > 1) {
            currentLength++;
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n = n * 3 + 1;
            }
        }
        if (currentLength > max) {
            max = currentLength;
        }
    }
    return max;
}


describe('placeholder', () => {
    it('', () => {})
})
