function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
