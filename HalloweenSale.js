function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let number = 0;
  while (s - p >= 0) {
    s = s - p;
    p = p - d;
    if (p <= m) {
      p = m;
    }
    number++;
  }
  return number;
}

console.log(howManyGames(20, 3, 6, 70));
console.log(howManyGames(20, 3, 6, 80));
console.log(howManyGames(20, 3, 6, 85));
