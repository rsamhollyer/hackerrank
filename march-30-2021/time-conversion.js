// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

let s = "12:40:22AM";

function timeConversion(s) {
  s = s.padStart(10, "0");
  let hh = parseInt(s.slice(0, 2));
  let mm = parseInt(s.slice(3, 5));
  let ss = parseInt(s.slice(6, 8));
  let letters = s.slice(-2);

  if (hh < 12 && letters === "PM") {
    hh += 12;
    letters = "PM";
  }
  if (hh === 12 && letters === "AM") {
    hh = 0;
  }
  return `${hh.toString().padStart(2, "0")}:${mm
    .toString()
    .padStart(2, "0")}:${ss.toString().padStart(2, "0")}`;
}

console.log(timeConversion(s));
