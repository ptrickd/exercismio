//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  let questionArray = question.split(' ')

  if (!questionArray[2]) {
    throw new Error('Syntax error')
  }

  let total = Number(questionArray[2].match(/[-\d]+/g))
  let operations = questionArray.splice(3)
  let operation, secondNum

  while (operations.length) {

    if (operations[0].match(/[0-9]/g)) {
      throw new Error('Syntax error')
    }

    if (!operations[0].match(/plus|minus|multiplied|divided/g)) {
      throw new Error('Unknown operation')
    }

    if (!operations[1] && !operations[2]) {
      throw new Error('Syntax error')
    }

    if (operations[1] !== 'by') {

      operation = operations[0]
      secondNum = Number(operations[1].match(/[-\d]+/g))

    } else {

      operation = operations[0]
      secondNum = Number(operations[2].match(/[-\d]+/g))
    }

    if (typeof secondNum !== 'number') {
      throw new Error('Syntax error')
    }

    switch (operation) {

      case 'plus':
        total = total + secondNum
        break

      case 'minus':
        total = total - secondNum
        break

      case 'multiplied':
        total = total * secondNum
        break

      case 'divided':
        total = total / secondNum
        break

      default:
        throw new Error('Unknown operation')

    }

    operations = operations[1] !== 'by' ?
      operations.splice(2) :
      operations.splice(3)

  }

  return total
};
