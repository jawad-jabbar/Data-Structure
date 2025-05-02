const palindromeSubstring = (arr) => {
    let longest="", newStr;
    let left = 0;
    let right = arr.length;
  
    while (left <= arr.length) {
      if (left !== right) {
        newStr = arr.substring(left, right);
        if (isPalindrome(newStr) && longest.length < newStr.length) {
          longest = newStr;
        }
        right--;
        continue;
      }
  
      left++;
      right = arr.length;
    }
    return longest;
  };
  
  const isPalindrome = (str) =>
    str.toLowerCase() === str.split("").reverse().join("");
  
  // const str1 = 'abba'
  const str1 = "abcabcbb";
  // const str1 = "bbbbb";
  // const str1 = 'pwwkew'
  const palindromestr = palindromeSubstring(str1);
  console.log(palindromestr);