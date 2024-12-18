/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;

          if (completed === promisesArray.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });

    if (promisesArray.length === 0) {
      resolve(results);
    }
  });
};
