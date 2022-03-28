function timeConversion(s) {
  // Write your code here
  let hours = s.substr(0, 2);
  let minutes = s.substr(3, 2);
  let seconds = s.substr(-4, 2);
  let modifier = s.substr(-2, 2);

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours) + 12;
  }

  let time = `${hours}:${minutes}:${seconds}`;
  return time;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("12:05:45AM"));
