function viralAdvertising(n) {
  let start = 5;
  let totalLikes = 0;

  for (let i = 1; i <= n; i++) {
    totalLikes += Math.floor(start / 2);
    start = Math.floor(start / 2) * 3;
  }

  return totalLikes;
}

console.log(viralAdvertising(5));
console.log(viralAdvertising(2));
