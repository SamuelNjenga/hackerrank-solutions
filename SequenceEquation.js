function permutationEquation(p) {
  // Write your code here
  let result = [];
  for (var i = 1; i <= p.length; i++) {
    result.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return result;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));