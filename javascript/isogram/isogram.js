//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (initialStr) => {

  let letters = [...LETTERS]
  let index = 0
  let isIsogram = true

  for (let i = 0; i < initialStr.length; i++) {

    if (initialStr[i] === '-' || initialStr[i] === ' ') continue

    index = letters.indexOf(initialStr[i].toLowerCase())

    if (index !== -1) letters.splice(index, 1)

    else {

      isIsogram = false
      break
    }
  }
  return isIsogram
};

const LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n',
  'l', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'

]