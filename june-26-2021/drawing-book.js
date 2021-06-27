// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function pageCount(n, p) {
  return Math.floor(n / 2) >= p ? fromTheFront(p) : fromTheBack(n, p);
}

function fromTheBack(n, p) {
  let pageCount = 0;
  if (n % 2 === 0 && n - p === 1) {
    return 1;
  }
  while (p < n - 1) {
    pageCount += 1;
    n -= 2;
  }
  return pageCount;
}

function fromTheFront(p) {
  let pageCount = 0;
  let start = 1;
  while (start < p) {
    pageCount += 1;
    start += 2;
  }
  return pageCount;
}
