const scores =[10, 20, 30, 20, 10, 40];

const uniqueScores = new Set(scores);

for (let score of uniqueScores) {
  console.log(score);
}
