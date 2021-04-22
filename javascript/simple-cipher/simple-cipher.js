//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    this._key = key ? key : createKey()
  }

  encode(value) {

    let newValue = ''
    let indexOfLetter = 0
    let indexOfKey = 0

    let ratio = Math.ceil(value.length / this._key.length)
    let counter = 0

    for (let j = 0; j < ratio; j++) {

      for (let i = 0; i < this._key.length; i++) {

        indexOfLetter = LETTERS.indexOf(value[counter])
        indexOfKey = LETTERS.indexOf(this._key[i])

        if ((indexOfLetter + indexOfKey) > 25) indexOfLetter -= 26

        newValue += LETTERS[indexOfLetter + indexOfKey]
        counter++

        if ((counter) >= value.length) break

      }
    }

    return newValue
  }

  decode(value) {
    let newValue = ''
    let indexOfLetter = 0
    let indexOfKey = 0

    let ratio = Math.ceil(value.length / this._key.length)
    let counter = 0

    for (let j = 0; j < ratio; j++) {

      for (let i = 0; i < this._key.length; i++) {

        indexOfLetter = LETTERS.indexOf(value[counter])
        indexOfKey = LETTERS.indexOf(this._key[i])

        if ((indexOfLetter - indexOfKey) < 0) indexOfLetter += 26

        newValue += LETTERS[indexOfLetter - indexOfKey]
        counter++

        if ((counter) >= value.length) break
      }
    }

    return newValue
  }

  get key() {
    return this._key
  }
}

const LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]

const createKey = () => {
  let newKey = ''
  let index = 0
  for (let i = 0; i < 12; i++) {
    index = Math.floor(Math.random()) * 26
    newKey += LETTERS[index]
  }
  return newKey
}

