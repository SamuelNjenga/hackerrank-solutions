function beautifulTriplets(d, arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
      result++;
    }
  }
  return result;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]));
