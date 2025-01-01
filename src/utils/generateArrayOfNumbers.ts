const generateSeriesOfNumbers = (
  length: number,
  start: number = 0
): number[] => {
  return Array.from({ length }, (_, index) => start + index);
};

export default generateSeriesOfNumbers;
