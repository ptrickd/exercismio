//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (str, numOfDigits) => {
  let highestProduct = 0
  let currentProduct = 0

  if (str.length < numOfDigits) throw new Error('Span must be smaller than string length')
  if (numOfDigits < 0) throw new Error('Span must be greater than zero')
  if (numOfDigits === 0) return 1

  for (let i = 0; i < str.length - numOfDigits + 1; i++) {

    currentProduct = Number(str[i])
    for (let j = 1; j < numOfDigits; j++) {

      currentProduct *= Number(str[i + j])
    }
    if (isNaN(currentProduct)) throw new Error('Digits input must only contain digits')
    if (currentProduct > highestProduct) highestProduct = currentProduct
  }

  return highestProduct
};