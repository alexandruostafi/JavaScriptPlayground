function addition(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR: Both arguments must be numbers.";
    }
  return a + b;
}

console.log(addition(2, 3));
console.log(addition(-1, 5));
console.log(addition(0, 0));
console.log(addition(1.2, 2.5));
console.log(addition("2", 3));
