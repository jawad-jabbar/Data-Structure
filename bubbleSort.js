const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (String(arr[i]) > String(arr[i + 1])) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// const arr = ["b","r" , "m", "a", "o"]
const arr = [10, 3, 'b', -1, 'd', -5, 'a', 'c', 18];
// const num = arr.filter(element => typeof element === 'number');
// const alphabets = arr.filter(element => typeof element === 'string');
// console.log(arr.sort())
// bubbleSort(num)
// bubbleSort(alphabets)

bubbleSort(arr)

console.log(arr);
// const numType = arr.forEach(element => console.log(typeof element));
// console.log(numType)
// console.log(alphabets)

