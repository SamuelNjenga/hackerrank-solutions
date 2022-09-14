function mostActive(customers) {
  // Write your code here
  let loyal = [];
  let alreadyChecked = [];
  for (let i = 0; i < customers.length; i++) {
    let count = 0;
    if (!alreadyChecked.includes(customers[i])) {
      alreadyChecked.push(customers[i]);
      for (let j = 0; j < customers.length; j++) {
        if (customers[j] === customers[i]) {
          count++;
        }
      }
    }
    if ((count / customers.length) * 100 >= 5) {
      if (!loyal.includes(customers[i])) {
        loyal.push(customers[i]);
      }
    }
  }
  return loyal.sort();
}

console.log(
  mostActive([
    20,
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Beta",
  ])
);
