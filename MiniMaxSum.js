function miniMaxSum(arr) {
  // Write your code here
  let newArray = arr.sort(function (a, b) {
    return a - b;
  });
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < newArray.length - 1; i++) {
    minSum += newArray[i];
  }
  for (let i = 1; i < newArray.length; i++) {
    maxSum += newArray[i];
  }
  console.log(minSum, maxSum);
}

miniMaxSum([12, 34, 44, 26]);
console.log("---------------");
miniMaxSum([22, 54, 64, 72]);
