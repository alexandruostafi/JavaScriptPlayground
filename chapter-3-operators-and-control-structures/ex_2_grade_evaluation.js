const score = 49

if (score >= 90) {
    console.log(`${score} -> Excellent`)
} else if (score >= 75) {
    console.log(`${score} -> Good`)
} else if (score >= 50) {
    console.log(`${score} -> Pass`)
} else if (score >= 0) {
    console.log(`${score} -> Fail`)
} else {
    console.log('Invalid score')
}