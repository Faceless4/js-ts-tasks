module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const currentDate = new Date(targetDate);
  const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
  const differenceInTime = newYearDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return daysLeft;
};
