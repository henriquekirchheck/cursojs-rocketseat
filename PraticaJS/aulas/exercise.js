// 1. Declare uma variavel de nome weight

const weigth = 92.8

// 2. Que tipo de dado é a variavel acima/

console.log(typeof weigth)

/* 3. Declare uma variavel e atribua valores para cada um dos dados:
       * name: String
       * age: Number (integer)
       * stars: Number (float)
       * isSubscribed: Boolean
*/

let name, age, stars, isSubscribed
name = 'Henrique'
age = 14
stars = 18.6
isSubscribed = true

const person = {
    name: 'Henrique',
    age: 14,
    stars: 18.6,
    isSubscribed: true
}

// 4. Que tipo de dado é essa variavel abaixo?

let student = {
    name: 'Ana',
    age: 15,
    weight: 52.6
}

console.log(typeof student)

// 4.1 Atibua a ela as mesmas propriedades do exercicio 3.

// 4.2 Mostre no console a seguinte mensagem: 'A <name> com <age> anos de idade pesa <weight>kg'

console.log(`A ${student.name} com ${student.age} anos de idade pesa ${student.weight}kg`)

// 5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

// 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students.push(student)

// 7. Coloque no console o valor da possição 0 do array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students

student = {
    name: 'Camilla',
    age: 17,
    weight: 63.7
}

students.push(student)

// 9. Sem rodar o codigo diga qual é a resposta do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou

console.log(a)
var a = 1

// RESPOSTA 9 : undefined, pois a variavel 'a' ainda não teve nada atribuido, porem ela foi declarada

// 10. Trocando o var da questão 10 para let, oq vai acontecer agora?
/*
console.log(a)
let a = 1
*/
// RESPOSTA 10 : Erro, pois a variavel 'a' ainda não teve nada atribuido e não foi declarada