//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor = 1, maxFactor, sum }) {
  maxFactor = maxFactor ? maxFactor : sum

  let result = []
  let sumSquare = 0
  let triplet

  for (let i = minFactor; i < maxFactor; i++) {
    for (let j = i + 1; j <= maxFactor; j++) {

      sumSquare = Math.pow(i, 2) + Math.pow(j, 2)
      // triplet = new Triplet(i, j, Math.sqrt(sumSquare))

      if ((sum - i - j) >= maxFactor) continue
      if (Math.sqrt(sumSquare) + i + j === sum) result.push(new Triplet(i, j, Math.sqrt(sumSquare)))
    }
  }

  return result
}

class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  toArray() {
    return [this.a, this.b, this.c]
  }
}
//last test works if I try it direct in Node but freeze in jest