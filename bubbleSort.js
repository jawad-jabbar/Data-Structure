const arr = [10, 3, -1, -5, 18, 13, 24, 105];

const bubbleSortDoWhile = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSortDoWhile(arr);
console.log(arr);
