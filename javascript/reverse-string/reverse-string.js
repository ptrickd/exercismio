//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  let strReversed = ''
  for (let i = 0; i < str.length; i++) {
    strReversed += str[str.length - i - 1]
  }
  return strReversed
};
