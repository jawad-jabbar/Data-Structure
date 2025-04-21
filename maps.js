const map = new Map([['a',1],['b',2]])

// Add key and value in Map
map.set('c', 3);

// Delete key and value from the Map
map.delete('c');

// Return true if the key exists in the Map
console.log(map.has('a'))

// Return the size of Map
console.log(map.size)

for (const [key,value] of map) {
     console.log(`${key} : ${value}`)
}