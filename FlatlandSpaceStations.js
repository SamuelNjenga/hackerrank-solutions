function flatlandSpaceStations(n, c) {
  const distance = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < c.length; j++) {
      temp.push(Math.abs(c[j] - i));
    }
    distance.push(Math.min(...temp));
  }
  return Math.max(...distance);
}

console.log(flatlandSpaceStations(5, [0, 4]));
