//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (initialValue) => {

  let newValue = {}
  let keys = Object.keys(initialValue)

  keys.forEach(key => {

    initialValue[key].forEach(item => {

      newValue[item.toLowerCase()] = Number(key)

    })

  })

  return newValue
};
