// Manipulando Arrays

// Contar elementos de um Array

const array = [
    'a',
    {type: 'array'},
    function() {
        return 'alo'
    }
]

console.log(array)
console.log(array[1].type)
console.log(array[2]())
console.log(array.length)


