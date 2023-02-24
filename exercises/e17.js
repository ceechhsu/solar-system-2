export function minBy(array, cb) {
  let min = array[0];
  for (const elem of array) {
    if (cb(elem) < cb(min)) {
      min = elem;
    }
  }
  return min;
}

export function maxBy(array, cb) {
  let max = array[0];
  for (const elem of array) {
    if (cb(elem) > cb(max)) {
      max = elem;
    }
  }
  return max;
}
