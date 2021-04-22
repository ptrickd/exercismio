//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this._scores = input
  }

  get scores() {
    return this._scores
  }

  get latest() {
    return this._scores[this._scores.length - 1]
  }

  get personalBest() {
    return Math.max(...this._scores)
  }

  get personalTopThree() {

    let topThree = []
    let copyOfScores = [...this._scores]
    let maxValue = 0
    let amountOfValues = copyOfScores.length > 2 ? 3 : copyOfScores.length

    for (let i = 0; i < amountOfValues; i++) {

      maxValue = Math.max(...copyOfScores)
      topThree.push(maxValue)
      copyOfScores.splice(copyOfScores.indexOf(maxValue), 1)

    }

    return topThree
  }
}
