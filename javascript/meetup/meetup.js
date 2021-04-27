//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, week, day) => {

  const DAYS = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ]

  let date = new Date(year, month - 1)
  let firstDayOfMonth = date.getDay()
  let dayOfTheWeek = DAYS.indexOf(day)
  //difference between first day of the month and the one we're looking
  let today = dayOfTheWeek - firstDayOfMonth + 1
  let numDaysInTheMonth = new Date(year, month, 0).getDate()

  if (week === 'first') {
    while (today < 1) {
      today += 7
    }
  }

  if (week === 'second') {
    while (today < 8) {
      today += 7
    }
  }

  if (week === 'teenth') {
    while (today < 13) {
      today += 7
    }
  }

  if (week === 'third') {
    while (today < 15) {
      today += 7
    }
  }

  if (week === 'fourth') {
    while (today < 22) {
      today += 7
    }
  }

  if (week === 'last') {
    while (today <= numDaysInTheMonth - 7) {
      today += 7
    }
  }

  return new Date(year, month - 1, today)//decrease month of 1 cause it's from 0 to 6
}
