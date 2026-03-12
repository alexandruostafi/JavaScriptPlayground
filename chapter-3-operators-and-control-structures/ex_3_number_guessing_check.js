const secretNumber = 7
const userGuess = 5

if (userGuess === secretNumber) {
    console.log('Correct guess!')
} else if (userGuess < secretNumber) {
    console.log('Too low')
} else {
    console.log('Too high')
}
