function filterArray(arr) {
    return arr.filter((char) => typeof char == 'number' )
}

filterArray([1, 2, "a", "b"]);

module.exports = filterArray