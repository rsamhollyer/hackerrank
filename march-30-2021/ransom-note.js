//https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// function checkMagazine(magazine, note) {
//   //Edge Cases
//   if (note.length > magazine.length) {
//     console.log(`No`);
//     return;
//   }

//   if (note.length === 0) {
//     console.log("No");
//     return;
//   }
//   ///
//   let noteObj = noteCache(note);
//   let startPoint = 0;
//   let endPoint = magazine.length - 1;

//   let keySet = new Set(Object.keys(noteObj));

//   while (endPoint >= startPoint) {
//     if (startPoint === endPoint && noteObj[magazine[startPoint]] > 0) {
//       noteObj[magazine[startPoint]]--;
//       if (noteObj[magazine[startPoint]] === 0) {
//         keySet.delete(magazine[startPoint]);
//       }
//     }

//     if (noteObj[magazine[startPoint]] > 0) {
//       noteObj[magazine[startPoint]]--;
//       if (noteObj[magazine[startPoint]] === 0) {
//         keySet.delete(magazine[startPoint]);
//       }
//     }
//     if (noteObj[magazine[endPoint]] > 0) {
//       noteObj[magazine[endPoint]]--;
//       if (noteObj[magazine[endPoint]] === 0) {
//         keySet.delete(magazine[endPoint]);
//       }
//     }

//     if (keySet.size === 0) {
//       console.log("Yes");
//       return;
//     }
//     startPoint++;
//     endPoint--;
//   }
//   console.log("No");
// }

// function noteCache(str) {
//   const noteObj = {};
//   let startPoint = 0;
//   let endPoint = str.length - 1;

//   while (endPoint >= startPoint) {
//     if (startPoint === endPoint) {
//       noteObj[str[startPoint]] = (noteObj[str[startPoint]] || 0) + 1;
//     } else {
//       noteObj[str[startPoint]] = (noteObj[str[startPoint]] || 0) + 1;
//       noteObj[str[endPoint]] = (noteObj[str[endPoint]] || 0) + 1;
//     }
//     startPoint++;
//     endPoint--;
//   }

//   return noteObj;
// }

let array1 = "give me one grand today night".split(" ");

let array2 = "give one grand today".split(" ");

checkMagazine(array1, array2);

// MORE ELEGANT SOLUTION:

function checkMagazine(magazine, note) {
  if (note.length > magazine.length || note.length < 1) {
    console.log("No");
    return;
  }
  let result = "Yes";
  const magazineMap = {};
  const noteMap = {};
  for (let word of magazine) {
    magazineMap[word] = (magazineMap[word] || 0) + 1;
  }
  for (let word of note) {
    noteMap[word] = (noteMap[word] || 0) + 1;
    if (!magazineMap[word] || noteMap[word] > magazineMap[word]) result = "No";
  }

  console.log(result);
}
