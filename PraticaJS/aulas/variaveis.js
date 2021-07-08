// ---------------------------------------------------------- //

var clima = 'Quente'
clima = 'Frio'
console.log(clima)

let clima2 = 'Quente'
clima2 = 'Frio'
console.log(clima2)

const clima3 = 'Quente'
console.log(clima3)

// ---------------------------------------------------------- //

let Clima
Clima = 'Quente'
console.log(Clima)

Clima = true
console.log(Clima)

// ---------------------------------------------------------- //

// var é global e local | var usa hoisting

console.log('Antes do bloco: x = ', x)

{
    var x = 0
    console.log('No bloco: x = ', x)
}

console.log('Depois do bloco: x = ', x)

// const e let são locais e só funcionam no escopo onde foram criadas

let y = 1
const z = 1
let a = 1

console.log('Antes do bloco: y = ', y)
console.log('Antes do bloco: z = ', z)
console.log('Antes do bloco: a = ', a)

{
    let y = 0
    const z = 0
    a = 0
    console.log('No bloco: y = ', y)
    console.log('No bloco: z = ', z)
    console.log('No bloco: a = ', a)
}

console.log('Depois do bloco: y = ', y)
console.log('Depois do bloco: z = ', z)
console.log('Depois do bloco: a = ', a)

// ---------------------------------------------------------- //

// Discobrir o tipo de dado

const name = 'Mike'
console.log(typeof Name)

// Agrupamento de declarações

let age, isHuman
age = 14
isHuman = true

// Multiplos argumentos na função
console.log(name, age, isHuman)

//// String + variaveis

// Concatenando Valores

console.log('O nome é ' + name + ' e a idade é ' + age + '!')

// interpolando valores com template literals ou template strings

console.log(`O ${name} tem ${age} anos!`)

