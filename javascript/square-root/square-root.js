//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Digit-by-digit_calculation
export const squareRoot = (radicand) => {
  // if (radicand === 1) return 1
  let bit = 1 << 30
  let res = 0

  while (bit > radicand) {
    bit >>= 2
  }
  while (bit !== 0) {
    if (radicand >= res + bit) {
      radicand -= res + bit;
      res = (res >> 1) + bit;
    } else
      res >>= 1;
    bit >>= 2;
  }
  return res
};

