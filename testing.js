const palindromeSubstring = (arr) => {
  let longest = "";
  let newStr = "";
  for (let left = 0; left <= arr.length; left++) {
    let right = arr.length;
    while (left < right) {
      newStr = arr.substring(left, right);
      if (isPalindrome(newStr)) {
        if (longest.length < newStr.length) {
          longest = newStr;
        }
      }
      right--;
    }
  }
  return longest;
};

const isPalindrome = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] === str[str.length - 1 - i]) {
      return true;
    }
  }
  return false;
//   let reverseStr = str.split('').reverse().join('')
//   return str === reverseStr
};

// const str1 = 'abba'
// const str1 = "abcabcbb";
// const str1 = 'bbbbb'
// const str1 = 'aaabaaa'
const str1 = 'pwwkew'
const palindromestr = palindromeSubstring(str1);
console.log(palindromestr);

// (EVEN)array.length = 10, (ODD)array.length = 7/5/9
// loop over array.length/2;
// comparison array[i] === array[length - 1 - i];
// if matched boolean value will be true
// else boolean value will be false
