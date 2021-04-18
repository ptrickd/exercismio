//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {

  let valueOfCode = ''
  colors.forEach((color, index) => {
    if (index < 2) valueOfCode += COLORS.indexOf(color.toLowerCase())
  })
  return Number(valueOfCode)
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
