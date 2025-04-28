// Find longest substring without repeating characters.


// Q2: Find sub array with the given sum (Done)

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

// Q3: check string palandrom (Done)

// const isPalindrome = (str) => {
//     str = str.toLowerCase()
//     let reverseStr = str.split('').reverse().join('')
//     if(str === reverseStr){
//         return console.log(`${str} is Palindrome.`)
//     } else {
//         return console.log(`${str} is not Palindrome.`)
//     }
// }

// isPalindrome("Wow");  
// isPalindrome("hello");
// isPalindrome("noon")

// Q4: Find longest palindrom substring.


// Q5: Merge two sorted array and sum their elements based on index. (Done)
// const mergeSum = (a,b) =>{
//     let arr3 = []

//     let maxLength = Math.max(a.length, b.length);
    
//     let sum = 0

//     for(let i=0;i<maxLength;i++){
//         if(a[i] && b[i]){
//             sum = a[i]+b[i]
//             arr3.push(sum)
//         } else if(!a[i] && b[i]){
//             a[i] = 0;
//             sum = a[i]+b[i]
//             arr3.push(sum)
//         } else {
//             b[i] = 0;
//             sum = a[i] + b[i]
//             arr3.push(sum)
//         }    
//     }
//     return arr3
// }

// const arr1 = [1,5,2,78,34,45,21]
// const arr2 = [3,6,1,87,24]

// let sortedArr1 = arr1.sort(((a, b)=>{return a-b}))
// let sortedArr2 = arr2.sort(((a, b)=>{return a-b}))

// console.log(sortedArr1)
// console.log(sortedArr2)

// const mergedSum = mergeSum(sortedArr1,sortedArr2)
// console.log(mergedSum)