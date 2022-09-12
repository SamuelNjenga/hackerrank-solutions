function introChallenge(arr, V) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      return i;
    }
  }
  return -1;
}

console.log(introChallenge([1, 4, 5, 7, 9, 12], 4));
