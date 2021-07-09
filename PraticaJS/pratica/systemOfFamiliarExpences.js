/* Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    gains: [2600.98, 1968.36, 400],
    losses: [120.00, 1030.31, 200.00, 80.68, 1600.56],
}

function calculateMoney(gains, losses) {
    let totallosses = 0
    let totalgains = 0
    for(let gain of gains) {
        totalgains += gain
    }
    for(let loss of losses) {
        totallosses += loss
    }

    totalMoney = totalgains - totallosses

    if(totalMoney < 0) {
        console.log(`Seu saldo é negativo: R$${totalMoney}`)
    } else {
        console.log(`Seu saldo é positivo: R$${totalMoney}`)
    }
}


calculateMoney(family.gains, family.losses)