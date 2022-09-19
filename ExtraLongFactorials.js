function extraLongFactorials(n) {
  const factorial = (int) => {
    const bigInt = BigInt(int);
    return bigInt === 0n ? 1n : bigInt * factorial(bigInt - 1n);
  };
  console.log(factorial(n).toString());
}

extraLongFactorials(45);
extraLongFactorials(25);
