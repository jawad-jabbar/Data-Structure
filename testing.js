const findSubarrayWithSum = (arr, target) => {
    let currentSum = 0;   // To store the sum of the current window
    let start = 0;         // Left pointer of the window
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Add the current element to the window
        
        // Shrink the window if the current sum exceeds the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; // Remove the element at `start` from the window
            start++;
        }
        
        // If the current sum equals the target, return the subarray
        if (currentSum === target) {
            return arr.slice(start, end + 1); // Return the subarray
        }
    }
    
    return null; // Return null if no subarray is found
}

const arr = [1, 4, 20, 3, 10, 5];
const target = 33;
console.log(findSubarrayWithSum(arr, target));  // Output: [20, 3, 10]
