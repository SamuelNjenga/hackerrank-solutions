function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  console.log(arr);
  let mid = Math.floor(arr.length / 2);
  return arr[mid];
}

console.log(findMedian([5, 3, 1, 2, 4]));
