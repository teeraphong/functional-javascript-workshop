function multiplyByNumber(sourceNumber, number) {
    return sourceNumber * number;
}
function doubleAll(numbers) {
    return numbers.map(multiplyByNumber.bind(this, 5));
}

module.exports = doubleAll;