function catAndMouse(x, y, z) {
  if (Math.abs(z - x) > Math.abs(z - y)) {
    return "Cat B";
  } else if (Math.abs(z - x) < Math.abs(z - y)) {
    return "Cat A";
  } else if (Math.abs(z - x) === Math.abs(z - y)) {
    return "Mouse C";
  }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
