// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é Obrigatorio')
    }else {
        console.log(name)
    }
}

// try...catch

try {
    sayMyName('Henrique')
} catch(e) {
    console.log(e)
}

console.log('Depois do erro')