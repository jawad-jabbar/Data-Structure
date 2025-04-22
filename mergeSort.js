function mergeSort(arr) {
    // Base case: array with 0 or 1 element is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Find the middle point to divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort both halves and then merge them
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add any remaining elements from either array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage
  const array = [34, 7, 23, 32, 5, 62, 30, 12];
  console.log("Original array:", array);
  const sortedArray = mergeSort(array);
  console.log("Sorted array:", sortedArray);