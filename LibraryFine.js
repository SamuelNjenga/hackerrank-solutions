function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let fine = 0;
  if (y2 !== y1 && y1 > y2) {
    fine = 10000;
    return fine;
  } else if (y2 === y1 && m1 > m2) {
    fine = 500 * (m1 - m2);
    return fine;
  } else if (y2 === y1 && m2 === m1 && d1 > d2) {
    fine = 15 * (d1 - d2);
    return fine;
  } else return fine;
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018));
console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(1, 1, 2016, 31, 12, 2015));


