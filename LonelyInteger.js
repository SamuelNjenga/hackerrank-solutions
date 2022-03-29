function lonelyinteger(a) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count ^= a[i]; // XOR TRICK
  }
  return count;
}
console.log(lonelyinteger([1, 1, 2]));
console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
