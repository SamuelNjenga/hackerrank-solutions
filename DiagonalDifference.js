function diagonalDifference(arr) {
  // Write your code here
  let diff = 0;
  let rightToLeft = 0;
  let leftToRight = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        leftToRight += arr[i][j];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j >= 0; j--) {
      if (i == arr.length - j - 1) {
        rightToLeft += arr[i][j];
      }
    }
  }

  diff = Math.abs(rightToLeft - leftToRight);
  return diff;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
