// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

function bonAppetit(bill, k, b) {
  const correctCharge =
    bill.reduce((bill, item, index) => {
      if (index !== k) {
        bill += item;
      }
      return bill;
    }, 0) / 2;

  console.log(b === correctCharge ? `Bon Appetit` : b - correctCharge);
}

bonAppetit(bill, k, b);
