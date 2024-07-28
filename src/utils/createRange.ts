export const createRange = (start: number, end: number): number[] => {
  return [...Array(end + 1).keys()].filter((num) => num >= start);
}
