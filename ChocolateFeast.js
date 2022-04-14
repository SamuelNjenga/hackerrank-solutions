function chocolateFeast(n, c, m) {
  let chocolates = Math.floor(n / c);
  return chocolates + Math.floor((chocolates - 1) / (m - 1));
}

console.log(chocolateFeast(6, 2, 2));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(10, 2, 5));
