// Contrutor Function

let date = new Date('2021-07-09')

console.log(date)



function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const mayk = new Person('Mayk')
const joão = new Person('João')

console.log(mayk.walk())
console.log(joão.walk())