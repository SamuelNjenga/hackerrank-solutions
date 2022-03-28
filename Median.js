function findMedian(arr) {
  // Write your code here
  let newArray = arr.sort(function (a, b) {
    return a - b;
  });
  let index = Math.floor(newArray.length / 2);
  return newArray[index];
}

console.log(findMedian([45, 67, 41, 23, 24]));
