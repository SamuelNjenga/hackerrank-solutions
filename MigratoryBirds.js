function migratoryBirds(arr) {
  let maxValue = 0;
  let count = 0;
  let type = 0;

  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    if (count > maxValue) {
      maxValue = count;
      type = i;
    }
    count = 0;
  }

  return type;
}

console.log(migratoryBirds([1, 2, 3, 4, 5]));
console.log(migratoryBirds([2, 2, 3, 4, 5]));
console.log(migratoryBirds([1, 3, 3, 4, 5, 5, 5, 4, 5, 5, 7]));
