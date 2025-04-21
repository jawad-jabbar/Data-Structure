function countingSort(arr, maxValue) {
    let count = new Array(maxValue + 1).fill(0); // Initialize a count array
    
    // Count the occurrences of each element in the input array
    for (let num of arr) {
        count[num]++;
    }
    
    // Build the sorted array by iterating through the count array
    let sortedArray = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sortedArray.push(i);
            count[i]--;
        }
    }
    
    return sortedArray;
}

let array = [4, 2, 2, 8, 3, 3, 1];
let maxValue = Math.max(...array);
console.log("Sorted Array:", countingSort(array, maxValue));