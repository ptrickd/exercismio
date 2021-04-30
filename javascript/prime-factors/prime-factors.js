//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let listOfFactors = []
  let divisor = 2

  while (num >= divisor ** 2) {

    if (num % divisor === 0) {

      listOfFactors.push(divisor)
      num /= divisor

    } else divisor++
  }

  if (num !== 1) listOfFactors.push(num)

  return listOfFactors
};
