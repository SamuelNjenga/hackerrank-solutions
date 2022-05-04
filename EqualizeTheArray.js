function equalizeArray(arr) {
  // Write your code here
  let minimum = 9999;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        count++;
      }
    }
    if (count < minimum) {
      minimum = count;
    }
  }
  return minimum;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
console.log(equalizeArray([1, 2, 2, 3]));
