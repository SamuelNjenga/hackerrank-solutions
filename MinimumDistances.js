function minimumDistances(a) {
  // Write your code here
  let min = 9999;
  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      if (a[j] === a[i]) {
        if (j - i !== 0) {
          let val = Math.abs(j - i);
          if (val < min) {
            min = val;
          }
        }
      }
    }
  }
  if (min === 9999) {
    min = -1;
  }
  return min;
}

console.log(minimumDistances([3, 2, 1, 2, 3]));
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([1, 2, 3, 4, 5]));
