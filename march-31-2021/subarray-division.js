// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function birthday(s, d, m) {
  let counter = 0;

  for (let i = 0; i < s.length - m + 1; i++) {
    let sum = s.slice(i, i + m).reduce((acc, cur) => acc + cur, 0);
    if (sum === d) {
      counter++;
    }
  }
  return counter;
}

let s = [1, 2, 1, 3, 2];
let d = 3;
let m = 2;

console.log(birthday(s, d, m));
