//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (value) => {

  let arrayOfAnswers = []
  let arrayCopy = []
  const WORDS = ['wink', 'double blink', 'close your eyes', 'jump']
  const BINARIES = [
    parseInt('0001', 2),
    parseInt('0010', 2),
    parseInt('0100', 2),
    parseInt('1000', 2),
    parseInt('10000', 2)
  ]

  if ((value & BINARIES[0]) && arrayOfAnswers.indexOf(WORDS[0]) === -1) {
    arrayOfAnswers.push(WORDS[0])
  }

  if ((value & BINARIES[1]) && arrayOfAnswers.indexOf(WORDS[1] === -1)) {
    arrayOfAnswers.push(WORDS[1])
  }

  if ((value & BINARIES[2]) && arrayOfAnswers.indexOf(WORDS[2] === -1)) {
    arrayOfAnswers.push(WORDS[2])
  }

  if ((value & BINARIES[3]) && arrayOfAnswers.indexOf(WORDS[3] === -1)) {
    arrayOfAnswers.push(WORDS[3])
  }

  if (value & BINARIES[4]) {

    arrayCopy = [...arrayOfAnswers]
    arrayOfAnswers = []

    for (let i = arrayCopy.length - 1; i >= 0; i--) {
      arrayOfAnswers.push(arrayCopy[i])
    }
  }

  return arrayOfAnswers
};
