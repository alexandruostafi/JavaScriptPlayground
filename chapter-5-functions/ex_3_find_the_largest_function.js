function findLargestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return "ERROR: Input must be an array.";
    }
    else if (numbers.length === 0) {
        return "ERROR: Array cannot be empty.";
    }
    
    let largest = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return "ERROR: All elements in the array must be numbers.";
        }
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    
    return largest;
}

console.log(findLargestNumber([3, 5, 7, 2, 8]));
console.log(findLargestNumber([-1, -5, -3]));
console.log(findLargestNumber([10]));
console.log(findLargestNumber([]));
console.log(findLargestNumber([1, "2", 3]));
