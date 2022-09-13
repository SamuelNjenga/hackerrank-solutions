function insertionSort1(n, arr) {
  let numberToSort = arr[n - 1];
  console.log(numberToSort);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > numberToSort) {
      arr[i + 1] = arr[i];
      if (numberToSort < arr[i] && i === 0) {
        console.log(arr.join(" "));
        arr[i] = numberToSort;
      }
      console.log(arr.join(" "));
    } else {
      arr[i + 1] = numberToSort;
      console.log(arr.join(" "));
      break;
    }
  }
}

insertionSort1(5, [2, 4, 6, 8, 3]);
