// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
const ar = [1, 2, 3, 4, 5, 6, 10, 20];

const k = 5;
const n = ar.length;

//O(n) with hash table
// Video Explanation
//https://www.youtube.com/watch?v=9qPtxAY9bKA&t=214s

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  const hashMap = {};

  for (let i = 0; i < n; i++) {
    const modValue = ar[i] % k;
    console.log(`MODVALUE : ${modValue}`);
    console.log();
    if (hashMap[(k - modValue) % k]) {
      console.log(`INSIDE IF STATEMENT`);
      console.log(`K : ${k}`);
      console.log();
      console.log(`MODVALUE : ${modValue}`);
      console.log();
      console.log(
        `COMPLEMENT : ${k - modValue} % ${k} = ${(k - modValue) % k}`
      );
      console.log();
      console.log(`HASHMAP: ${JSON.stringify(hashMap)}`);
      console.log();
      count += hashMap[(k - modValue) % k];
      console.log(`COUNT : ${count}`);
      console.log();
      console.log(`OUTSIDE IF STATEMENT`);
    }

    hashMap[modValue] = (hashMap[modValue] || 0) + 1;

    // if (hashMap[modValue]) {
    //   hashMap[modValue]++;
    // } else {
    //   hashMap[modValue] = 1;
    // }
  }
  return count;
}

//BRUTE FORCE

// function divisibleSumPairs(n, k, ar) {
//   let counter = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = n + 1; j < n; j++) {
//       if (i < j && (ar[i] + ar[j]) % k === 0) {
//         counter++;
//       }
//     }
//   }

//   return counter;
// }

console.log(divisibleSumPairs(n, k, ar));
