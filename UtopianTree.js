function utopianTree(n) {
  let height = 1;
  if (n === 0) return height;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      height = 2 * height;
    } else {
      height++;
    }
  }
  return height;
}
console.log(utopianTree(4));
console.log(utopianTree(3));
