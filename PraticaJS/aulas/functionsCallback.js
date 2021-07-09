// callback Function
function sayMyName(name) {
    console.log('Antes')
    name()
    console.log('Depois')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)