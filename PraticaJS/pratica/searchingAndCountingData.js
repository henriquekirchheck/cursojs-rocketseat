/* 
    Buscando e contando dados em arrays

    Baseado no Array de Livros Por Categoria abaixo, faça os seguintes desafios

        * Contar o numero de categorias e o numero de livros em cada categoria
        * Contar o numero de autores de um livro
        * Mostrar livros do autor Auguto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [          
            {
                title: 'Você é Insubstituível',
                author: 'Auguto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Auguto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            },
        ],
    },
]

// Contar o numero de categorias e o numero de livros em cada categoria

function countBookCategory() {
    let countDone = []
    for(let category of booksByCategory) {
        let numberOfBooks = 0
        let infoObject = {}
        infoObject['category'] = category.category
        for(let books of category.books)
            numberOfBooks++
        infoObject['numberOfBooks'] = numberOfBooks
        countDone.push(infoObject)
    }
    return countDone
}

// Contar o numero de autores de um livro

function numberOfAuthors(book) {
    let numberOfAuthors
    for(let category of booksByCategory) {
        for(let books of category.books) {
            if(books.title.toLowerCase() == book.toLowerCase()) {
                numberOfAuthors = books.author.split(' e ').length
            }
        }
    }
    return numberOfAuthors
}

// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

function nameOfBookFromAuthor(author) {
    let nameOfBookFromAuthor = []
    for(let category of booksByCategory) {
        for(let books of category.books) {
            if(books.author.includes(' e ')) {
                let allAuthors = books.author.split(' e ')
                if(allAuthors.indexOf(author) != -1) {
                    nameOfBookFromAuthor.push(books.title)
                }
            }else {
                if(books.author.toLowerCase() == author.toLowerCase()) {
                    nameOfBookFromAuthor.push(books.title)
                }
            }
        }
    }
    return nameOfBookFromAuthor
}

console.log(countBookCategory())
console.log(numberOfAuthors('Você é Insubstituível'))
console.log(nameOfBookFromAuthor('Stephen R. Covey'))