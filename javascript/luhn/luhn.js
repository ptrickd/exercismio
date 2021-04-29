//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {
  let counter = 0
  let cardNumber = str
  let tempStr = ''
  let total = 0
  let tempNum

  for (let i = cardNumber.length - 1; i >= 0; i--) {

    if (cardNumber[i] !== ' ') counter++
    if (!(counter % 2) && cardNumber[i] !== ' ') {

      tempNum = cardNumber[i]
      tempNum *= 2
      if (tempNum > 9) tempNum -= 9

      tempStr += tempNum

    } else {
      tempStr += cardNumber[i]
    }
  }

  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] !== ' ') {
      total += Number(tempStr[i])
    }
  }

  if (counter < 2) return false
  if (isNaN(total)) return false

  return !(total % 10)
};