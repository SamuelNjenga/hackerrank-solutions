function kaprekarNumbers(p, q) {
  let k_num = [];
  for (let i = p; i <= q; i++) {
    let square = i * i;
    let myFunc = (num) => Number(num);
    let squareArr = Array.from(String(square), myFunc);
    let firstNo = 0;
    let lastNo = 0;

    for (let j = 0; j < squareArr.length; j++) {
      if (squareArr.length % 2 === 0) {
        if (j < squareArr.length / 2) {
          firstNo += squareArr[j] + "";
        } else {
          lastNo += squareArr[j] + "";
        }
      } else {
        if (j < squareArr.length / 2 - 1) {
          firstNo += squareArr[j] + "";
        } else {
          lastNo += squareArr[j] + "";
        }
      }
    }

    lastNo = parseInt(lastNo);
    firstNo = parseInt(firstNo);
    if (lastNo + firstNo === i) {
      k_num.push(i);
    }
  }

  if (k_num.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(k_num.join(" "));
  }
}

kaprekarNumbers(1, 100);
kaprekarNumbers(200, 400);
kaprekarNumbers(400, 700);
