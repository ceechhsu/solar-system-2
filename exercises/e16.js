// see e16.md

export function find(array, callback) {
  for (const elem of array) {
    if (callback(elem)) {
      return elem;
      break;
    }
  }
}
