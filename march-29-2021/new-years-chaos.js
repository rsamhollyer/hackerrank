let arr1 = [2, 1, 5, 3, 4]; // return 3
let arr2 = [2, 5, 1, 3, 4]; // return too chaotic
let arr3 = [1, 2, 5, 3, 7, 8, 6, 4]; // return 7

// function minimumBribes(q) {
//   let bribes = 0;

//   if (q.length <= 1) {
//     return bribes;
//   }

//   for (let a = q.length - 4; a >= 0; a--) {
//     if (q[a] > a + 3) {
//       console.log("Too chaotic");
//       return;
//     }
//   }

//   for (let i = 0; i < q.length - 1; i++) {
//     if (q[i] === i + 1) {
//       continue;
//     }

//     for (let j = i + 1; j < q.length; j++) {
//       if (q[i] > q[j]) {
//         let temp = q[j];
//         q[j] = q[i];
//         q[i] = temp;
//         bribes++;
//       }
//     }
//   }

//   console.log(bribes);
// }

// function minimumBribes2(q) {
//   let bribes = 0;

//   if (q.length <= 1) {
//     console.log(bribes);
//     return;
//   }

//   for (let a = q.length - 4; a >= 0; a--) {
//     if (q[a] > a + 3) {
//       console.log("Too chaotic");
//       return;
//     }
//   }

//   for (let i = 0; i < q.length - 1; i++) {
//     for (let j = i + 1; j < q.length; j++) {
//       if (q[i] > q[j]) bribes++;
//     }
//   }
//   console.log(bribes);
// }

minimumBribes(arr3);
// minimumBribes2(arr1);

// function minimumBribes3(q) {
//     for(let i = q.length - 4; i >= 0; i--) {
//         if(q[i] > i + 3) return console.log('Too chaotic');
//     }
//     for(var i = 0, swaps = 0, again = true; again; i++) {
//         again = false;
//         for (let j = 1; j < q.length - i; j++) {
//             if (q[j] < q[j-1]) {
//                 swaps++, again = true;
//                 let temp = q[j];
//                 q[j] = q[j-1], q[j-1] = temp;
//             }
//         }
//     }
//     console.log(swaps);
// }

minimumBribes3(arr3);
