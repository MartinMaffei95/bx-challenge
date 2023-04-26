export const sliceNumber = (num: number, maxCharacters = 5) => {
  const strN = num.toString();
  const slicedNumber = strN.slice(0, maxCharacters);
  return Number(slicedNumber);
};
