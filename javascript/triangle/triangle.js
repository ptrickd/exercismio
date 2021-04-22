//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = [...sides]
  }

  get isEquilateral() {
    let result = allSidePositive(this.sides)

    if (!result) return false

    if (!(this.sides[0] - this.sides[1]) && !(this.sides[0] - this.sides[2])) return true

    return false

  }

  get isIsosceles() {

    if (!allSidePositive(this.sides)) return false

    if (triangleInequality(this.sides)) return false

    if (
      !(this.sides[0] - this.sides[1]) ||
      !(this.sides[0] - this.sides[2]) ||
      !(this.sides[1] - this.sides[2])
    ) return true

    return false
  }

  get isScalene() {
    if (!allSidePositive(this.sides)) return false

    if (triangleInequality(this.sides)) return false

    if (
      (this.sides[0] - this.sides[1]) &&
      (this.sides[1] - this.sides[2]) &&
      (this.sides[0] - this.sides[2])
    ) return true

    return false
  }
}

const allSidePositive = (array) => {
  if (array[0] > 0 && array[1] > 0 && array[2] > 0) return true

  return false
}
const triangleInequality = (array) => {
  if (
    ((array[0] + array[1]) > array[2]) &&
    ((array[0] + array[2]) > array[1]) &&
    ((array[1] + array[2]) > array[0])
  ) return false

  return true
}