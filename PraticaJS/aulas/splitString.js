// Manipulando Strings e Números

// Separe um texto que contem espaços, em um novo array onde cada palavra é uma posição do array. Depois disso, transforme o array em um testo e onde era espaços coloque '_'

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ipsum possimus velit, quis laudantium, doloremque sed impedit error quae distinctio et fugit ad voluptatem dolore obcaecati voluptate quod! Commodi, facilis.'

let _lorem = lorem.split(' ').join('_')

console.log(_lorem.toLowerCase())