const bubbleSort = (arr) => {
    const isNumeric = (val) => !isNaN(Number(val));
  
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i];
        let b = arr[i + 1];
  
        let shouldSwap = false;
  
        if (isNumeric(a) && isNumeric(b)) {
          if (Number(a) > Number(b)) shouldSwap = true;
        } else {
          if (String(a) > String(b)) shouldSwap = true;
        }
  
        if (shouldSwap) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);
  };
  
  const arr = [10, '3', 'b', '-1', 'd', -5, 'a', 'c', "2e10", 18, "13", "9"];
  bubbleSort(arr);
  console.log(arr);
  