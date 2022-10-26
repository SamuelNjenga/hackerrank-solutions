function marsExploration(message) {
  let sos = "SOS";
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    if (message.charAt(i) != sos.charAt(i % 3)) count++;
  }
  return count;
}

console.log(marsExploration("SOSSPSSQSSOR"));
