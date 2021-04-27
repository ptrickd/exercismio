//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(...args) {
    this.time = formatTime(args)
  }

  toString() {
    return formatTimeToString(this.time)
  }

  plus(value) {
    this.time = formatTime([this.time[0], this.time[1] + value])
    return formatTimeToString(this.time)
  }

  minus(value) {
    this.time = formatTime([this.time[0], this.time[1] - value])
    return formatTimeToString(this.time)
  }

  equals(otherClock) {
    if (this.time[0] === otherClock.time[0] && this.time[1] === otherClock.time[1]) return true
    return false
  }
}

const formatTimeToString = time => {

  if (time[0] < 10 && time[1] < 10) return `0${time[0]}:0${time[1]}`
  else if (time[0] >= 10 && time[1] < 10) return `${time[0]}:0${time[1]}`
  else if (time[0] < 10 && time[1] >= 10) return `0${time[0]}:${time[1]}`
  else return `${time[0]}:${time[1]}`

}

const formatTime = args => {
  let hourFormatted = args[0]
  let minuteFormatted = args[1] ? args[1] : 0

  while (minuteFormatted >= 60) {
    hourFormatted++
    minuteFormatted -= 60
  }

  while (hourFormatted >= 24) {
    hourFormatted -= 24
  }

  while (minuteFormatted < 0) {
    hourFormatted--
    minuteFormatted += 60
  }

  while (hourFormatted < 0) {
    hourFormatted += 24
  }

  return [hourFormatted, minuteFormatted]
}

