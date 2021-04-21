//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values
  }

  append(list) {

    for (let i = 0; i < list.values.length; i++) {
      this.values.push(list.values[i])
    }
    return this
  }

  concat(listOfList) {
    for (let j = 0; j < listOfList.values.length; j++) {
      for (let i = 0; i < listOfList.values[j].values.length; i++) {
        this.values.push(listOfList.values[j].values[i])
      }
    }

    return this
  }

  filter(func) {
    for (let i = 0; i < this.values.length; i++) {
      if (!func(this.values[i])) this.values.splice(i, 1)
    }
    return this
  }

  map(func) {
    let result;
    for (let i = 0; i < this.values.length; i++) {
      result = func(this.values[i])
      if (result) {
        this.values[i] = result
      }
    }
    return this
  }

  length() {
    return this.values.length
  }

  foldl(func, initialValue) {
    let result = initialValue
    for (let i = 0; i < this.values.length; i++) {
      result = func(result, this.values[i])

    }
    return result
  }

  foldr(func, initialValue) {
    let result = initialValue
    for (let i = this.values.length - 1; i >= 0; i--) {
      result = func(result, this.values[i])
    }
    return result
  }

  reverse() {
    let newArray = []
    for (let i = this.values.length - 1; i >= 0; i--) {
      newArray.push(this.values[i])
    }
    this.values = newArray
    return this
  }
}
