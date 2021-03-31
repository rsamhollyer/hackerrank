// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2 && v1 > v2) {
    return "NO";
  } else if (x2 > x1 && v2 > v1) {
    return "NO";
  } else if (x1 === x2) {
    return "YES";
  }
  // Find their relative speed (x1-x2) if [x1>x2]
  const minSpeed = Math.min(v1, v2);
  const maxSpeed = Math.max(v1, v2);
  const relativeSpeed = maxSpeed - minSpeed;

  let minDistance = Math.min(x1, x2);
  const maxDistance = Math.max(x1, x2);

  while (minDistance <= maxDistance && relativeSpeed !== 0) {
    if (minDistance === maxDistance) {
      return "YES";
    }
    minDistance += relativeSpeed;
  }
  return "NO";
}
