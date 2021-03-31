// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const min = s;
  const max = t;
  const appleTree = a;
  const orangeTree = b;
  const appleRange = apples
    .map((a) => a + appleTree)
    .filter((a) => a >= s && a <= t);
  const orangeRange = oranges
    .map((o) => o + orangeTree)
    .filter((o) => o >= s && o <= t);
  console.log(appleRange.length);
  console.log(orangeRange.length);
}
