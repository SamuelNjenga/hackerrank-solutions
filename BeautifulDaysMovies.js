const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

const reverse = (number) => {
  return Math.abs(number - reversedNum(number));
};

function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for (let start = i; start <= j; start++) {
    if (reverse(start) % k === 0) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
