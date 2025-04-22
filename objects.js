// User Object
const obj = {
    fname: "jawad",
    lname: "jabbar",
    age: 30,
    gender: "male",
    email: "jawad.jabbar@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA"
};

// Accessing properties
console.log(obj.fname);
console.log(obj.lname);
console.log(obj.age);
console.log(obj.gender);
console.log(obj.email);
console.log(obj.phone);

// Object.keys() - returns array of property names
console.log("Keys:", Object.keys(obj));

// Object.values() - returns array of property values
console.log("Values:", Object.values(obj));

// Object.entries() - returns array of [key, value] pairs
console.log("Entries:", Object.entries(obj));

// Object.hasOwnProperty() - check if a key exists
console.log("Has 'email':", obj.hasOwnProperty("email"));
console.log("Has 'dob':", obj.hasOwnProperty("dob"));

// Object.assign() - clone or merge objects
const cloned = Object.assign({}, obj);
console.log("Cloned Object:", cloned);

// Object.freeze() - prevent modifications
Object.freeze(obj);
obj.age = 40; // won't change
console.log("After freeze attempt:", obj);

// Object.seal() - prevent adding/removing properties but allows editing existing ones
const sealedObj = {
    name: "Ali",
    city: "Lahore"
};
Object.seal(sealedObj);
sealedObj.city = "Karachi"; // allowed
sealedObj.country = "Pakistan"; // not added
delete sealedObj.name; // won't delete
console.log("Sealed Object:", sealedObj);


