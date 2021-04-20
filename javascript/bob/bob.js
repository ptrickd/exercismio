//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let answer = 'Whatever.'
  if (isNotAMessage(message)) {
    answer = 'Fine. Be that way!'
  } else if (hasNoLetter(message) && !isAQuestion(message)) {
    // console.log('has no letter')
    answer = 'Whatever.'
  } else if (!hasNoLetter(message) && isAllCapital(message) && isAQuestion(message)) {
    answer = "Calm down, I know what I'm doing!"
  }
  else if (!hasNoLetter(message) && isAllCapital(message)) {
    answer = 'Whoa, chill out!'
  } else if (isAQuestion(message)) {
    answer = 'Sure.'
  }

  return answer
};

const isAllCapital = message => {

  const regexpAllCapital = /(^[A-Z0-9\s!,\\(%\^*@#\$]+$)/g
  const messageWithoutQuestion = message.replace('?', '')
  const result = regexpAllCapital.test(messageWithoutQuestion)
  return result

}

const isAQuestion = message => {
  return /([?]|(?:\?\s{1,}){1,})$/g.test(message)
}

const hasNoLetter = message => {

  const regexpHasNoLetter = /^([0-9\s,?]+)$/g
  return regexpHasNoLetter.test(message)

}

const isNotAMessage = message => {

  if (!message.length) return true

  const regexNoTAMessage = /(^[\s\\t]+$)/g
  return regexNoTAMessage.test(message)

}