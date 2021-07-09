// operador condicional (Ternario)

// Dependendo da condição, recebemos valores diferentes

// Condição então valor1 se não valor2
// contition  ?   value1   :    value2

// Exemplos:
//  Cafe da manhã top

let pao = true
let queijo = true

const niceBreakfest = pao && queijo ? 'Café top' : 'Café Ruim'
console.log(niceBreakfest)

// Maior de 18

let age = 14
const canDrive = age >= 18 ? 'Can Drive' : "Can't Drive"
console.log(canDrive)