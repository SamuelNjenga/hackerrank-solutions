function hurdleRace(height, k) {
  // Write your code here
  let max = -9999;
  for (let i of height) {
    if (i > max) {
      max = i;
    }
  }
  if (max - k <= 0) {
    return 0;
  } else {
    return max - k;
  }
}

console.log(hurdleRace([1, 6, 3, 5, 2], 7));
console.log(hurdleRace([1, 2, 3, 3, 2], 1));
console.log(hurdleRace([2, 5, 4, 5, 2], 7));
