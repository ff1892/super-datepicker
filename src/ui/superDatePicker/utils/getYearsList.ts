export const getYearsList = (year: number, yearsInList: number) => {
  const yearsBefore = Math.floor(yearsInList / 2);
  return new Array(yearsInList).fill(year).map((y, index) => y - yearsBefore + index);
};
