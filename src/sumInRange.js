/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;
  start = Number(start);
  end = Number(end);
  if (start > end) [start, end] = [end, start];
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

