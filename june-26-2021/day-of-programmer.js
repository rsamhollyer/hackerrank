// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
  let string;

  if (year < 1918) {
    string = julianCalendar(year);
  } else if (year > 1918) {
    string = gregorian(year);
  } else {
    string = weird(year);
  }

  return string;
}

function julianCalendar(yr) {
  if (yr % 4 === 0) {
    return `12.09.${yr}`;
  }
  return `13.09.${yr}`;
}

function gregorian(yr) {
  if ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0) {
    return `12.09.${yr}`;
  }
  return `13.09.${yr}`;
}

function weird(yr) {
  return `26.09.${yr}`;
}
