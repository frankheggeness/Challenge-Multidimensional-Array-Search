function locate(array, target) {
  // do work here
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
    if (array[i].constructor === Array) {
      if (locate(array[i], target) === true) {
        return true;
      }
    }
  }
  return false;
}

module.exports = locate;
