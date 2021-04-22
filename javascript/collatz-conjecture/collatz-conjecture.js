//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (startingValue) => {
  let currentValue = startingValue
  let stepCount = 0

  if (currentValue <= 0) throw new Error('Only positive numbers are allowed')

  while (currentValue !== 1) {

    if (currentValue % 2 === 0) currentValue = currentValue / 2
    else currentValue = (currentValue * 3) + 1
    stepCount++

  }

  return stepCount
};
