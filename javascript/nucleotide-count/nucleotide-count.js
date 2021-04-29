//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(sequence) {
    let count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 }
    let keys = ['A', 'C', 'G', 'T']

    for (let i = 0; i < sequence.length; i++) {
      if (keys.indexOf(sequence[i]) === -1) throw new Error('Invalid nucleotide in strand')
      count[sequence[i]]++
    }

    return `${count.A} ${count.C} ${count.G} ${count.T}`
  }
}
