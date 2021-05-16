function isLeapYear(year: number): boolean {
  let result = false

  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      result = true
    } else if (year % 100 !== 0) {
      result = true
    }

  }
  return result
}

export default isLeapYear
