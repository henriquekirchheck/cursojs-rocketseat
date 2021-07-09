//function hoisting

sayMyName()

function sayMyName() {
    console.log('Henrique')
}

sayMyName2()

const sayMyName2 = function() {
    console.log('Henrique')
}
