/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, ...strs) =>  Array.from(new Set(str1.split("").filter((ch) => strs.every((value) => value.includes(ch))))).join("")


describe('Tests', () => {
  it('test commonCharacters', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toStrictEqual('aeiou');
    expect(commonCharacters('abcd', 'bdc', 'cd')).toStrictEqual('cd');
  });
});
