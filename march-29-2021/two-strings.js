// Complete the twoStrings function below.
let s1 = "and";
let s2 = "art";
// returns YES

let s3 = "be";
let s4 = "cat";
// returns NO

function twoStrings(s1, s2) {
  const regex = new RegExp([...s2].join("|"), "gi");

  return regex.test(s1) ? "YES" : "NO";
}

console.log(twoStrings(s1, s2));
