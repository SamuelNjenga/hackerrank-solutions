function fairRations(B) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 0) {
      continue;
    } else {
      B[i]++;
      B[i + 1]++;
      count += 2;
    }
  }
  if (B[B.length - 1] % 2 === 0) {
    return count;
  } else {
    return "NO";
  }
}
console.log(fairRations([4, 5, 6, 7]));
console.log(fairRations([4, 5]));
