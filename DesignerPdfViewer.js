function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const heights = [];

  for (let letter of word) {
    heights.push(h[alphabet.indexOf(letter)]);
  }

  return heights.length * Math.max(...heights);
}

console.log(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
    ],
    "abc"
  )
);
