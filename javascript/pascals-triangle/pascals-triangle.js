//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (depth) => {
  let result = []

  for (let i = 0; i <= depth; i++) {

    let innerArray = []

    if (i === 1) {

      result.push([1])

    } else if (i > 1) {

      for (let j = 0; j < i; j++) {
        if (j === 0 || j === i - 1) {
          innerArray.push(1)
        } else {
          innerArray.push(result[i - 2][j - 1] + result[i - 2][j])
        }
      }

      result.push(innerArray)

    }

  }

  return result
};
