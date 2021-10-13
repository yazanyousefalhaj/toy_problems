/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

function permut(string) {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i)
      // if char was used already
      continue; // skip it this time

    var remainingString =
      string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

const nextBigger = function (num) {
  if (num.toString().length < 2) return -1;
  const x = Math.min(...permut(num.toString()).map((s) => parseInt(s)).filter(n => n > num))
  return x === num || x === Infinity? -1: x;
};

describe("Tests", () => {
  it("test nextBigger", () => {
    expect(nextBigger(12)).toEqual(21)
    expect(nextBigger(513)).toEqual(531)
    expect(nextBigger(2017)).toEqual(2071)
    expect(nextBigger(9)).toEqual(-1)
    expect(nextBigger(111)).toEqual(-1)
    expect(nextBigger(531)).toEqual(-1)
  });
});

