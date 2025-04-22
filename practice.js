let a = {
    name:"jawad",
    age:30,
    address: { city: "Lahore" }
}

// let b = {...a}
let b = structuredClone(a)
b.address.city = "Karachi"



console.log(a.address.city)
console.log(b.address.city)