//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split(' ')
  }

  get rows() {
    let outerArr = []
    let innerArr = []
    this.matrix.forEach(item => {

      if (item.includes('\n')) {

        let arrWithSeparator = item.split('\n')
        innerArr.push(Number(arrWithSeparator[0]))
        outerArr.push(innerArr)
        innerArr = []
        innerArr.push(Number(arrWithSeparator[1]))

      } else {

        innerArr.push(Number(item))

      }
    })
    outerArr.push(innerArr)
    return outerArr
  }

  get columns() {
    let outerArr = []
    let outerCount = 0
    let innerCount = 0

    this.matrix.forEach(item => {

      if (!item.includes('\n') && !outerCount) {
        outerArr.push([Number(item)])
        innerCount++

      } else if (item.includes('\n') && !outerCount) {

        let arrWithSeparator = item.split('\n')
        outerArr.push([Number(arrWithSeparator[0])])
        innerCount = 0
        outerArr[0].push(Number(arrWithSeparator[1]))
        outerCount++

      } else if (item.includes('\n')) {

        let arrWithSeparator = item.split('\n')
        outerArr[innerCount + 1].push(Number(arrWithSeparator[0]))
        innerCount = 0
        outerArr[0].push(Number(arrWithSeparator[1]))

      } else {

        innerCount++
        outerArr[innerCount].push(Number(item))

      }
    })

    return outerArr
  }
}
