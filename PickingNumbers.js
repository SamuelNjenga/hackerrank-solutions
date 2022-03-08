function pickingNumbers(a) {
  let results = -9999;
  let frequency = {};

  for (let num of a) {
    frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
  }

  for (let i in frequency) {
    results = Math.max(
      results,
      frequency[i] + (frequency[i - 1] !== undefined ? frequency[i - 1] : 0)
    );
  }

  return results;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([5, 3, 1]));
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
console.log(pickingNumbers([1, 1, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 5]));
