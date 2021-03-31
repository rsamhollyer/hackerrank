// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let records = [0, 0];

  for (let score of scores) {
    let newMaxScore = Math.max(maxScore, score);
    let newMinScore = Math.min(minScore, score);

    if (newMaxScore > maxScore) {
      maxScore = newMaxScore;
      records[0] += 1;
    } else if (newMinScore < minScore) {
      minScore = newMinScore;
      records[1] += 1;
    }
    console.log(records);
  }
  return records.join(" ");
}

console.log(breakingRecords([12, 23, 34, 10, 23, 5, 24]));
