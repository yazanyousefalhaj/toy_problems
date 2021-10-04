/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  let sum = 0
  while(num) {
    sum += num  & 0x1
    num >>= 1
  }
  return sum
};

describe('Tests', () => {
  it('test commonCharacters', () => {
    expect(bitCounting(1234)).toStrictEqual(5);
    expect(bitCounting(0)).toStrictEqual(0);
    expect(bitCounting(1024)).toStrictEqual(1);
    expect(bitCounting(1023)).toStrictEqual(10);
  });
});
