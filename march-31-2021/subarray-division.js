// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// function birthday(s, d, m) {
//   let counter = 0;

//   for (let i = 0; i < s.length - m + 1; i++) {
//     let sum = s.slice(i, i + m).reduce((acc, cur) => acc + cur, 0);
//     if (sum === d) {
//       counter++;
//     }
//   }
//   return counter;
// }

let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let d = 18;
let m = 7;

// MORE EFFICIENT SLIDING WINDOW TECHNIQUE

function birthday(s, d, m) {
  if (m > s.length || m > 12 || m < 1) return 0;

  let counter = 0;
  let sum = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    sum += s[i];

    if (i + 1 >= m) {
      if (sum === d) {
        counter++;
      }

      sum -= s[j];
      j++;
    }
  }
  return counter;
}

console.log(birthday(s, d, m));
