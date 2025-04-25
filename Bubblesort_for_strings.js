function isNumeric(val) {
  return !isNaN(val);
}

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const a = arr[i];
      const b = arr[i + 1];

      const aIsNum = isNumeric(a);
      const bIsNum = isNumeric(b);

      let shouldSwap = false;

      if (aIsNum && bIsNum) {
        shouldSwap = Number(a) > Number(b);
      } else if (!aIsNum && !bIsNum) {
        shouldSwap = a > b;
      } else if (!aIsNum && bIsNum) {
        shouldSwap = true;
      } 
      
      if (shouldSwap) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = ["10", "3", "b", "-1", "d", "-5", "a", "c", "18", "13", "24", "105"];
bubbleSort(arr);
console.log(arr);
