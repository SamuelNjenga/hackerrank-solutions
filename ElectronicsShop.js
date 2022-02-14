function getMoneySpent(keyboards, drives, b) {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j];
      if (sum > maxSum && sum <= b) {
        maxSum = sum;
      }
    }
  }

  return maxSum === 0 ? -1 : maxSum;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
