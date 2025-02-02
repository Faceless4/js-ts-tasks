/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Invalid value: must be a number");
  }

  if (from === to) return parseFloat(value.toFixed(2));

  const conversions: { [key: string]: { [key: string]: ((v: number) => number) | undefined } } = {
    m: { mi: (v) => v * 0.000621371 },
    mi: { m: (v) => v / 0.000621371 },
    gr: { pound: (v) => v * 0.00220462 },
    pound: { gr: (v) => v / 0.00220462 },
    C: { K: (v) => v + 273.15 },
    K: { C: (v) => v - 273.15 },
  };

  const fromConversions = conversions[from];
  if (!fromConversions) {
    throw new Error(`Conversion from ${from} is not supported`);
  }

  const convertFn = fromConversions[to];
  if (!convertFn) {
    throw new Error(`Conversion from ${from} to ${to} is not supported`);
  }

  return parseFloat(convertFn(value).toFixed(2));
};
