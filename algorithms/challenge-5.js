function filterList(arr) {
    let newList = arr.filter((char) => typeof char == "number")
    return newList;
}

filterList([1,2,'aasf','1','123',123]);

module.exports =filterList