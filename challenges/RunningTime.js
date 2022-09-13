function runningTime(arr) {
  let shifts = 0;
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      shifts++;
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return shifts;
}

console.log(runningTime([2, 1, 3, 1, 2]));
console.log(runningTime([1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9]));
