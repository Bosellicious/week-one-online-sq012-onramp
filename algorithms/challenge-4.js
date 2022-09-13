function sumTwoSmallestNums(arr) {
    let filtered = arr.filter((x)=> Math.sign(x) == 1)
    let sorted = filtered.sort((a,b) => a - b);

    let num1 = sorted[0]
    let num2 = sorted[1]
    return num1 + num2;
}

sumTwoSmallestNums([2, 9, 6, -1]);

module.exports =sumTwoSmallestNums