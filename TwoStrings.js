function twoStrings(s1, s2) {
  for (const c of s1) {
    if (s2.includes(c)) {
      return "YES";
    }
  }
  return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
