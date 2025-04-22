const arr = [1, 2, 3, 4, "Jawad"];
console.log("Original:", arr);

// push - Add at end
arr.push(4);
console.log("After push:", arr);

// pop - Remove from end
arr.pop();
console.log("After pop:", arr);

// unshift - Add at beginning
arr.unshift(32);
console.log("After unshift:", arr);

// shift - Remove from beginning
arr.shift();
console.log("After shift:", arr);

// slice - Get part of array
const slicedArr = arr.slice(1, 3); // index 1 to 2
console.log("Sliced (1 to 2):", slicedArr);

// splice - Remove and/or add
arr.splice(2, 1, "Ali"); // Remove 1 item at index 2 and insert "Ali"
console.log("After splice:", arr);

// map - Transform array
const mapped = arr.map(item => item.toString());
console.log("Mapped to string:", mapped);

// filter - Filter items
const filtered = arr.filter(item => typeof item === "number");
console.log("Filtered numbers:", filtered);

// reduce - Reduce to single value
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Reduced sum:", sum);

// find - Find first match
const found = arr.find(item => item === "Jawad");
console.log("Found 'Jawad':", found);

// includes - Check presence
console.log("Includes 'Ali':", arr.includes("Ali"));

// indexOf - Get index
console.log("Index of 'Ali':", arr.indexOf("Ali"));

// reverse - Reverse order
const reversed = [...arr].reverse();
console.log("Reversed copy:", reversed);

// sort - Sort elements
const toSort = [3, 1, 5, 2];
toSort.sort((a, b) => a - b);
console.log("Sorted:", toSort);

// join - Join to string
console.log("Joined with comma:", arr.join(", "));

// concat - Merge arrays
const newArr = arr.concat(["Hello", "World"]);
console.log("Concatenated:", newArr);

// flat - Flatten nested arrays
const nested = [1, [2, [3]]];
console.log("Flattened:", nested.flat(2));

// toString - Convert to string
console.log("Array to string:", arr.toString());

// entries - Get index-value pairs
for (const [index, value] of arr.entries()) {
  console.log(`Index ${index}:`, value);
}