// Function Expression/Anonymus
const sum = function(number1, number2) { // Parameters
    const total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
console.log(sum(number1,number2)) // Arguments

number1 = 1
number2 = 1
console.log(`O numero1 é ${number1}`)
console.log(`O numero2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
