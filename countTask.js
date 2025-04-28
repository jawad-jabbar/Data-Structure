const countChar = (arr) => {
  const count = {};
  for (const str of arr) {
    for (const char of str) {
      if (count[char] === undefined) {
        count[char] = 1;
      } else {
        count[char] += 1;
      }
    }
  }
  return count;
}

const arr = ['I want to be a Backend Developer and I am working on it']
// const arr = ['a']
// const arr = ['apple']
// const arr = ['apple','banana','candle','duck']
// const arr = ["a", "p", "p", "l", "e"];
console.log(countChar(arr));
