function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  for (let i of arr) {
    if (i < 0) {
      negativeCount++;
    } else if (i === 0) {
      zeroCount++;
    } else {
      positiveCount++;
    }
  }
  console.log((positiveCount / arr.length).toFixed(6));
  console.log((negativeCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

plusMinus([12, -1, 0, 34, -89, 99, 76, 54]);
console.log("--------------------------");
plusMinus([2, -1, 0, 3, 0, 19, -9, 5, 9]);
