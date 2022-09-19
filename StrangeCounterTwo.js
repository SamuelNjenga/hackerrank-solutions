const strangeCounter = (t) => {
  let n = 3;
  let lastTime = 3;
  while (lastTime < t) {
    n = n * 2;
    lastTime = lastTime + n;
  }
  return lastTime - t + 1;
};

console.log(strangeCounter(4));
