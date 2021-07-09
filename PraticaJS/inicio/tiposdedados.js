// ------------------------------------------------------------------------- //

var str = 'Essa é uma string'
console.log(str)

// ------------------------------------------------------------------------- //

var int = 64
var float = 12.2
var notanumber = NaN
var infinito = Infinity

console.log(int, float, notanumber, infinito)

console.log(12 / 2)

console.log(50 / 'a')

console.log(Infinity)

// ------------------------------------------------------------------------- //

var bool = true
var fbool = false

console.log(bool, fbool)

// ------------------------------------------------------------------------- //

console.log(undefined)
console.log(null)

// ------------------------------------------------------------------------- //

var obj = { 
    name: 'Henrique',
    idade: 14, 
    andar: function() { 
        console.log('andar')
    }
}

console.log(obj['andar'])

// ------------------------------------------------------------------------- //

var array = ['Henrique', 14]

console.log(array)

// ------------------------------------------------------------------------- //
/*

Primitivos:

  * String
  * Number
  * Boolean
  * undefined
  * Symbol
  * Big int

Estruturais:
  * Object
    * Array
    * Map
    * Set
    * Date
    * ...
  * Function 

Primitivo Estrutural:
  * null

*/
// ------------------------------------------------------------------------- // 

console.log(`Use
as
crazes
para
multi
linha
e
logica
${2+2}`)