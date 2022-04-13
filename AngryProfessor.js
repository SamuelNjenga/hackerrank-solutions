function angryProfessor(k, a) {
  let countOnTime = 0;
  for (let i of a) {
    if (i <= 0) {
      countOnTime++;
    }
  }
  if (countOnTime >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));
console.log(angryProfessor(5, [0, -1, 2, 1, -3, -9, 12]));
console.log(angryProfessor(4, [0, -1, 2, 1, -3, -9, 12]));
