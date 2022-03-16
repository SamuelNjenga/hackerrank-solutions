function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j) {
        if ((ar[i] + ar[j]) % k === 0) {
          counter++;
        }
      }
    }
  }
  return counter;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
