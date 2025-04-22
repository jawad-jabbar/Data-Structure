// // Helper function to get the digit at a specific place
// function getDigit(num, place) {
//     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
//   }
  
//   // Helper function to count the number of digits in a number
//   function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
//   }
  
//   // Helper function to get the maximum digit count in an array
//   function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let num of nums) {
//       maxDigits = Math.max(maxDigits, digitCount(num));
//     }
//     return maxDigits;
//   }
  
//   // Main Radix Sort function
//   function radixSort(nums) {
//     const maxDigitCount = mostDigits(nums);
    
//     for (let k = 0; k < maxDigitCount; k++) {
//       // Create 10 buckets (0-9)
//       let digitBuckets = Array.from({ length: 10 }, () => []);
      
//       // Place each number in the corresponding bucket
//       for (let num of nums) {
//         const digit = getDigit(num, k);
//         digitBuckets[digit].push(num);
//       }
      
//       // Reconstruct the array by concatenating all buckets
//       nums = [].concat(...digitBuckets);
//     }
    
//     return nums;
//   }
  
//   // Example usage
//   const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
//   console.log("Original array:", numbers);
//   const sortedNumbers = radixSort(numbers);
//   console.log("Sorted array:", sortedNumbers);