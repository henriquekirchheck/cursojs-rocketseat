// Manipulando Arrays

let techs = ['HTML5', 'CSS3', 'JavaScript']

// Adicionar um item no fim
techs.push('React')
// Adicionar no começo
techs.unshift('Linux')
// Remover do fim
techs.pop()
// Remover do Começo
techs.shift()
// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// Remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento array
console.log(techs.indexOf('CSS3'))

console.log(techs)