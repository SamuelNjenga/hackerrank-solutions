function findDigits(n) {
  let digitsArray = [];
  let count = 0;

  digitsArray = String(n)
    .split("")
    .map((n) => {
      return Number(n);
    });

  for (let i = 0; i < digitsArray.length; i++) {
    if (n % digitsArray[i] === 0) {
      count++;
    }
  }

  return count;
}

console.log(findDigits(111));
console.log(findDigits(1012));
console.log(findDigits(12));
