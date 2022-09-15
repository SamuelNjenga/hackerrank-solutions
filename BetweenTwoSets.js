const isFactor = (a, b) => a % b === 0;

function getTotalX(a, b) {
  var results = [];
  for (var i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every((x) => isFactor(i, x)) && b.every((x) => isFactor(x, i)))
      results.push(i);
  }

  return results.length;
}

console.log(getTotalX([2, 6], [24, 36]));
