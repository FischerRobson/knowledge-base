const nome = 'robson'
const concat = 'ola ' + nome + ' !'
const template = `
    ola
    ${nome}!`
console.log(concat, template)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`ei..... ${up('cuidado')}!`)