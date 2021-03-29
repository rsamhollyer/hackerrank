// Complete the rotLeft function below.
//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

let array = [1, 2, 3, 4, 5];
let d = 4;

// [5,1,2,3,4]

function rotLeft(a, d) {
  return a.slice(d).concat(a.slice(0, d));
}

console.log(rotLeft(array, d));
