/* Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C

 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69   - D
 * menor que 60    - F

*/

function noteConverter(note) {
    let result

    if((note < 60) && ((note < 0) == false )) {
        result = 'F'
    } else if((note >= 60) && (note < 70)) {
        result = 'D'
    } else if((note >= 70) && (note < 80)) {
        result = 'C'
    } else if((note >= 80) && (note < 90)) {
        result = 'B'
    } else if((note >= 90) && ((note > 100) == false)) {
        result = 'A'
    } else {
        throw new Error('A nota é invalida')
    }

    return result
}

console.log(noteConverter(69))