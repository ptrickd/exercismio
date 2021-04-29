//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real
    this._imag = imag
  }

  get real() {
    return this._real
  }

  get imag() {
    return this._imag
  }

  add(complex) {
    this._real += complex.real
    this._imag += complex.imag
    return this
  }

  sub(complex) {
    this._real -= complex.real
    this._imag -= complex.imag
    return this
  }

  div(complex) {
    const realPart = this._real
    const imagPart = this._imag
    const divisor = Math.pow(complex.real, 2) + Math.pow(complex.imag, 2)

    this._real = ((realPart * complex.real) + (imagPart * complex.imag)) / divisor
    this._imag = ((imagPart * complex.real) - (realPart * complex.imag)) / divisor

    return this
  }

  mul(complex) {
    const realPart = this._real
    const imagPart = this._imag

    this._real = (realPart * complex.real) - (imagPart * complex.imag)
    this._imag = (imagPart * complex.real) + (realPart * complex.imag)

    return this
  }

  get abs() {
    return Math.sqrt(Math.pow(this._real, 2) + Math.pow(this._imag, 2))
  }

  get conj() {
    this._real = this._real
    this._imag = this._imag ? -this._imag : 0
    return this
  }

  get exp() {
    const realPart = this._real
    const imagPart = this._imag

    this._real = Math.exp(this._real) * Math.cos(this._imag)
    this._imag = Math.exp(this._real) * Math.sin(this._imag)

    return this
  }

}
