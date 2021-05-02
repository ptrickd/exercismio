//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(size) {
    let matrix = [], innerMatrix = [], initMatrix = []
    let direction = ['toRight', 'toBottom', 'toLeft', 'toTop']
    let directionIndex = 0
    let counter = 0, counterSide = 0, horIndex = 0, vertIndex = 0
    let horMargin = 0, vertMargin = 0

    for (let i = 0; i < size ** 2; i++) initMatrix.push(i + 1)
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        innerMatrix.push(0)
      }

      matrix.push(innerMatrix)
      innerMatrix = []
    }

    while (counter < size ** 2) {
      while (initMatrix.length > 0) {

        switch (direction[directionIndex]) {
          case 'toRight':
            matrix[vertIndex][horIndex] = initMatrix.shift()
            if (horIndex < (size - horMargin - 1)) {
              horIndex++
            } else {

              vertIndex++
              directionIndex++
            }

            break;

          case 'toBottom':
            matrix[vertIndex][horIndex] = initMatrix.shift()
            if (vertIndex < (size - vertMargin - 1)) {
              vertIndex++
            } else {

              horIndex--
              directionIndex++
            }

            break;

          case 'toLeft':
            matrix[vertIndex][horIndex] = initMatrix.shift()
            if (horIndex - horMargin > 0) {
              horIndex--
            } else {
              horMargin++
              vertIndex--
              directionIndex++
            }

            break;

          case 'toTop':
            matrix[vertIndex][horIndex] = initMatrix.shift()
            if (vertIndex - vertMargin > 1) {
              vertIndex--
            } else {
              vertMargin++
              horIndex++
              directionIndex = 0
            }

            break;
        }

        counterSide++
        counter++
      }
      counterSide = 0

    }

    return matrix
  }
}