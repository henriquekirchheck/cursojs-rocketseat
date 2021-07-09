/*
    Falsy

    Qualdo um valor é considerado false em contextos onde um booleano é obrigatorio (Condicionais e loops)

    false
    0
    -0
    ""
    ''
    null
    undefined
    NaN

    -------------------------------------------------------------------------------------------------------

    Truthy
    Quando um valor é conciderado true em contextos onde um booleano é obrigatorio

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(Infinity ? 'verdadeiro' : 'falso')