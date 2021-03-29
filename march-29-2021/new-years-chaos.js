let arr1 = [2, 1, 5, 3, 4]; // return 3
let arr2 = [2, 5, 1, 3, 4]; // return too chaotic
let arr3 = [1, 2, 5, 3, 7, 8, 6, 4]; // return 7

function minimumBribes(q) {
  let bribes = 0;

  if (q.length <= 1) {
    return bribes;
  }

  for (let i = 0; i < q.length - 1; i++) {
    for (let j = i + 1; j < q.length; j++) {
      if (q[i] > q[j] + 2) {
        console.log("Too chaotic");
        return;
      } else if (q[i] > q[j]) {
        let temp = q[j];
        q[j] = q[i];
        q[i] = temp;
        bribes++;
      }
    }
  }

  console.log(bribes);
}

function getInvCount(arr) {
  let inv_count = 0;
  if (arr.length <= 1) {
    console.log(inv_count);
    return;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inv_count++;
    }
  }
  console.log(inv_count);
}

minimumBribes(arr3);
getInvCount(arr1);
