function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30)); 
console.log(linearSearch(numbers, 100)); 
