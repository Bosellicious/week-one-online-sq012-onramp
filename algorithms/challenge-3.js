function sumMix(arr) {
   return arr.reduce((total, int) => Number(total) + Number(int))
}

sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);

module.exports = sumMix