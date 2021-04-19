//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rnaStrand = ''
  for (let i = 0; i < dna.length; i++) {
    rnaStrand += RNA[DNA.indexOf(dna[i])]
  }
  return rnaStrand
};

const DNA = ['G', 'C', 'T', 'A']
const RNA = ['C', 'G', 'A', 'U']
