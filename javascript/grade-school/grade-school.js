//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  constructor() {
    this._roster = {}
  }

  roster() {
    return JSON.parse(JSON.stringify({ ...this._roster }))
  }

  add(name, grade) {

    const entries = Object.entries(this._roster)
    for (const [key, value] of entries) {
      if (value.indexOf(name) !== -1) {
        this._roster[key].splice(value.indexOf(name), 1)
      }
    }

    if (!this._roster[grade]) {
      this._roster[grade] = [name]
    } else {
      this._roster[grade].push(name)
    }
    this._roster[grade].sort()
  }

  grade(grade) {

    let arrayOfNames = []
    if (grade in this._roster) arrayOfNames = this._roster[grade]
    return JSON.parse(JSON.stringify(arrayOfNames))

  }
}
