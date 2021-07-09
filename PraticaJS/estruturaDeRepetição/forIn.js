// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let proprety in person) {
    console.log(proprety)
    console.log(person[proprety])
}