let longestSubstring = (str) => {
    let charMap = {}; 
    let maxLength = 0;
    let left = 0; 

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
            left = charMap[currentChar] + 1; 
        }
        charMap[currentChar] = right; 
        maxLength = Math.max(maxLength, right - left + 1); 
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));   
console.log(longestSubstring("pwwkew"));  