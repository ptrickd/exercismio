//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (fullName) => {
  let acronym = ''
  let splited = fullName.split(/[\s-]/g)

  splited.forEach(word => {

    if (word[0]) {

      if (word[0] === '_' && word.length > 1) acronym += word[1].toUpperCase()
      else acronym += word[0].toUpperCase()

    }

  })

  return acronym
};
