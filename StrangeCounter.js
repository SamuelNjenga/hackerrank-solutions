function strangeCounter(t) {
  let timeArray = [];
  let initialValue = 3;
  timeArray[1] = initialValue;
  for (let i = 2; i <= t; i++) {
    let newInit = initialValue;

    if (timeArray[i] === undefined) {
      timeArray[i] = timeArray[i - 1] - 1;
    }

    if (timeArray[i] === 1) {
      initialValue = newInit * 2;
      timeArray[i + 1] = initialValue;
    }
  }
  return timeArray[t];
}

console.log(strangeCounter(4));
console.log(strangeCounter(17));
