function bonAppetit(bill, k, b) {
  let actualAmount = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      actualAmount += bill[i];
    }
  }
  if (b > actualAmount / 2) {
    console.log(b - actualAmount / 2);
  } else {
    console.log("Bon Appetit");
  }
}
bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
