function timeInWords(h, m) {
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eightteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  return !m
    ? `${words[h]} o' clock`
    : `${
        !(m % 30)
          ? "half"
          : !(m % 15)
          ? "quarter"
          : `${m <= 30 ? words[m] : words[60 - m]} ${`minute${
              m > 1 ? "s" : ""
            }`}`
      } ${m <= 30 ? "past" : "to"} ${words[m <= 30 ? h : h + 1]}`;
}

console.log(timeInWords(5, 47));
console.log(timeInWords(3, 00));
console.log(timeInWords(7, 15));
