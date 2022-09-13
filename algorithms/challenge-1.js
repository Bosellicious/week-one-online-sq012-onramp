function secondLargest(arr) {
  return arr.sort((a,b) => b - a)[1];
}


secondLargest([6, 3, 0, 30, 7]);

module.exports = secondLargest