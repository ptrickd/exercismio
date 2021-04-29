//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(allergiesNum) {
    this.allergiesNum = allergiesNum
  }

  list() {
    let list = []

    for (const [key, value] of Object.entries(LIST)) {
      if (this.allergiesNum & value) list.push(key)
    }

    return list
  }

  allergicTo(term) {
    let result = false

    for (const [key, value] of Object.entries(LIST)) {
      if (term === key && (this.allergiesNum & value)) result = true
    }

    return result
  }
}

const LIST = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
}
