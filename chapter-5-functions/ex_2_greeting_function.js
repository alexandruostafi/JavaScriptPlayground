function greetUser(name) {
    if(typeof name !== 'string' || name.trim() === '') {
        return "ERROR: Please provide a valid string.";
    }
  return `Hello, ${name}! Welcome back.`;
}

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
console.log(greetUser("Charlie"));
console.log(greetUser(""));
console.log(greetUser(123));
