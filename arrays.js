const arr = [1,2,3,4,"Jawad"]

console.log(arr)

//push
arr.push(4) //Insert 4 at the end
console.log(arr)

//pop
arr.pop()  //Remove 1 item from the end
console.log(arr)

//Unshift
arr.unshift(32) //Insert 32 at 1st index
console.log(arr)

//Shift
arr.shift()  //Remove 1 item from start
console.log(arr)


// Slice
const slicedArr = arr.slice(1, 3); // Get elements from index 1 to 2
console.log(slicedArr); 
