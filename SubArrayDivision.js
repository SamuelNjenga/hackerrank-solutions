function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  let initialMValue = m;
  for (let i = 0; i < s.length; i++) {
    let subSum = 0;
    let j = i;
    if (j === i) {
      m = initialMValue;
    }
    while (m > 0) {
      subSum += s[j];
      m = m - 1;
      j = j + 1;
    }
    if (subSum === d) {
      count = count + 1;
    }
  }
  return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([2, 2, 1, 3, 2], 4, 2));
console.log(birthday([1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
