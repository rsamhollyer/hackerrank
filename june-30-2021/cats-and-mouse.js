// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
function catAndMouse(x, y, z) {
  let result = "";
  if (Math.abs(x - z) < Math.abs(y - z)) {
    result = "Cat A";
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    result = "Cat B";
  } else {
    result = `Mouse C`;
  }

  return result;
}

catAndMouse(1, 2, 3);
