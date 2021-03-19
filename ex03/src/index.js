function rangeOfNumbers(startN, endN) {

    if (startN == endN) {
        return [startN];
    } else if (startN > endN) {
        return "The starting number will allways be less than or equal to the ending number";
    } else {
        var newarray = rangeOfNumbers(startN, endN - 1);
        newarray.push(endN);
        return newarray;
    }
}
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;