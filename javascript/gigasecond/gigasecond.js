//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateInStr) => {
  let dateInNum = Date.parse(dateInStr)
  let dateAddedGS = dateInNum + 1000000000 * 1000//GS in millisecond
  return new Date(dateAddedGS)
};
