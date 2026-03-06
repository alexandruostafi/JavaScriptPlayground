let userAge = "25";
let purchaseAmount = "99.99";
let isMember = "true";

userAge = parseInt(userAge);
purchaseAmount = parseFloat(purchaseAmount);
isMember = (isMember === "true");

console.log(`Age type: ${typeof userAge}`);
console.log(`Purchase amount type: ${typeof purchaseAmount}`);
console.log(`Member type: ${typeof isMember}`);

console.log(userAge + 5);
console.log(purchaseAmount + 10);