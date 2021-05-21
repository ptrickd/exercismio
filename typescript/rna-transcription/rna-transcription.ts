interface IValues {
  [key: string]: string
}

const VALUES: IValues = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

class Transcriptor {

  toRna(sequence: string): string {
    let result = ''
    let key: keyof typeof VALUES
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] in VALUES) {

        key = sequence[i]
        result += VALUES[key]
      } else {
        throw new Error("Invalid input DNA.");
      }

    }

    return result
  }
}

export default Transcriptor
