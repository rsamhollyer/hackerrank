let arr = [4, 3, 1, 2]; // return 3
let arr2 = [2, 3, 4, 1, 5]; // return 3
let arr3 = [1, 3, 5, 2, 4, 6, 7]; // return 3

function minimumSwaps(arr) {
  const indexes = arr.reduce((c, v, i) => {
    return (c[v] = i), c;
  }, []);
  const len = arr.length - 1;
  let swapCount = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] !== i + 1) {
      arr[indexes[i + 1]] = arr[i];
      indexes[arr[i]] = indexes[i + 1];
      swapCount++;
    }
  }
  return swapCount;
}

console.log(minimumSwaps(arr2));
console.log(minimumSwaps(arr));
