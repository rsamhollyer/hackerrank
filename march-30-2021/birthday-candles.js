// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

const candles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  if (candles.length === 1) {
    return 1;
  }
  // Write your code here
  let startPoint = 0;
  let endPoint = candles.length - 1;
  let tallest = -Infinity;
  while (endPoint >= startPoint) {
    if (endPoint === startPoint) {
      tallest = Math.max(tallest, candles[endPoint]);
      break;
    }

    tallest = Math.max(tallest, candles[startPoint], candles[endPoint]);
    startPoint++, endPoint--;
  }

  return candles.filter((c) => c === tallest).length;
}

birthdayCakeCandles(candles);
