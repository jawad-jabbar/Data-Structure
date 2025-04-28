
const findSubarrayWithSum = (arr, target) => {
    let currentSum = 0; 
    let start = 0; 
    
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; 

        while (currentSum > target && start <= end) {
            currentSum -= arr[start]; 
            start++;
        }
        
        if (currentSum === target) {
            return arr.slice(start, end + 1); 
        }
    }
    
    return null; 
}

const arr = [1,3,20,10,4,5]
const target = 33;
console.log(findSubarrayWithSum(arr, target)); 
