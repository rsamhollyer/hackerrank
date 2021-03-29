// Complete the hourglassSum function below.

// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

let matrix = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
/*Total sums are:
-63, -34, -9, -12,
-10,   0, 28,  23,
-27, -11, -2,  10,
  9,  17, 25,  18


*/
function hourglassSum(arr) {
  const sumObj = {};
  let counter = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let summedTimer =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      sumObj[counter] = summedTimer;
      summedTimer = 0;
      counter++;
    }
  }
  return Math.max(...Object.values(sumObj));
}

console.log(hourglassSum(matrix));
