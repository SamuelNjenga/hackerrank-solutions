function quickSort(arr) {
  // Write your code here
  let leftArray = [];
  let rightArray = [];
  let pivot = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...leftArray, ...rightArray];
}
console.log(quickSort([4, 5, 3, 7, 2]));
