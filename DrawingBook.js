function pageCount(n, p) {
  let count = 0;
  let page = 1;

  while (page < p) {
    count++;
    page += 2;
  }

  if (n % 2 !== 0) {
    page = n - 1;
  } else {
    page = n;
  }

  var countTwo = 0;

  while (page > p) {
    countTwo++;
    page -= 2;
  }

  if (count < countTwo) {
    return count;
  } else {
    return countTwo;
  }
}

console.log(pageCount(9, 4));
