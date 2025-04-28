// Merge two sorted array and sum their elements based on index.

const mergeSum = (a,b) =>{
    let arr3 = []

    let maxLength = Math.max(a.length, b.length);
    
    let sum = 0

    for(let i=0;i<maxLength;i++){
        if(a[i] && b[i]){
            sum = a[i]+b[i]
            arr3.push(sum)
        } else if(!a[i] && b[i]){
            a[i] = 0;
            sum = a[i]+b[i]
            arr3.push(sum)
        } else {
            b[i] = 0;
            sum = a[i] + b[i]
            arr3.push(sum)
        }    
    }
    return arr3
}

const arr1 = [1,5,2,78,34,45,21]
const arr2 = [3,6,1,87,24]

let sortedArr1 = arr1.sort(((a, b)=>{return a-b}))
let sortedArr2 = arr2.sort(((a, b)=>{return a-b}))

console.log(sortedArr1)
console.log(sortedArr2)

const mergedSum = mergeSum(sortedArr1,sortedArr2)
console.log(mergedSum)