let playerScores = new Map();

playerScores.set('Alice', 1250);
playerScores.set('Bob', 900);
playerScores.set('Charlie', 1100);

console.log('---Players and Scores---');
for (let [player, score] of playerScores) {
    console.log(`Player: ${player}, Score: ${score}`);
}

console.log('---Players---');
for (let player of playerScores.keys()) {
    console.log(player);
}

console.log('---Scores---');
for (let score of playerScores.values()) {
    console.log(score);
}
