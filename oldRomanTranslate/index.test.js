
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const translateRomanNumeral = (romanNumeral) => {
  let sum = 0;
  let smallerEncountered = false;

  for (let i = 0; i < romanNumeral.length; i++) {
    if (!DIGIT_VALUES[romanNumeral[i]]) {
      return null;

    }
    if (i < romanNumeral.length - 1) {
      let digitValue = Object.keys(DIGIT_VALUES).indexOf(romanNumeral[i])
      let nextDigitValue = Object.keys(DIGIT_VALUES).indexOf(romanNumeral[i + 1])
      if (digitValue < nextDigitValue) {
        if (!smallerEncountered) {
          sum -= DIGIT_VALUES[romanNumeral[i]]
          smallerEncountered = true
          continue;
        } else {
          return null;
        }
      }
    }
    sum += DIGIT_VALUES[romanNumeral[i]];
  }
  return sum;
}


  describe("Tests", () => {
    it("test toSnakeCase", () => {
      expect(translateRomanNumeral("XXI")).toEqual(21)
      expect(translateRomanNumeral("IV")).toEqual(4)
      expect(translateRomanNumeral("IX")).toEqual(9)
      expect(translateRomanNumeral("AAAAAAA")).toEqual(null)
    });
  });

