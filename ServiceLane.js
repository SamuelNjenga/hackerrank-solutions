function serviceLane(width, cases) {
  for (let i = 0; i < cases.length; i++) {
    let beg = cases[i][0];
    let end = cases[i][1];
    let min = 10000000;
    for (let j = beg; j <= end; j++) {
      if (width[j] < min) {
        min = width[j];
      }
    }
    console.log(min);
  }
}

serviceLane(
  [1, 3, 5, 6, 7],
  [
    [1, 2],
    [3, 5],
  ]
);
console.log("---------------------");
serviceLane(
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ]
);
