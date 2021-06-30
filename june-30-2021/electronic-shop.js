// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
function getMoneySpent(keyboards, drives, b) {
  let budget = -1;
  const purchaseCache = keyboards.reduce((acc, cur, idx) => {
    acc[idx] = -1;
    for (let i of drives) {
      if (cur + i <= b && cur + i > acc[idx]) {
        acc[idx] = cur + i;
      }
    }
    if (acc[idx] > budget) {
      budget = acc[idx];
    }
    return acc;
  }, {});

  return budget;
}

const k = [10, 22, 15, 2, 5, 7, 12, 35, 13, 70];
const d = [1, 6, 2, 3, 9, 12, 32, 7, 10, 11];
const b = 100;

console.log(getMoneySpent(k, d, b));
