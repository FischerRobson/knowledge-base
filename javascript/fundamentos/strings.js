const escola = 'fischer'

console.log(escola.charAt(4))   //caracter da posicao
console.log(escola.charCodeAt(4))   //numero da tabela ascii
console.log(escola.indexOf('c'))    //posicao do caracter
console.log(escola.substring(1))    //comeca a partir da posicao
console.log(escola.substring(1, 4)) //comeca a partir da posicao e termina na posicao - inclui 1 mas n inclui 4
console.log('escola '.concat(escola).concat("!"))    //concatenacao
console.log(escola.replace('h', 4)) //substituicao
console.log('fusca,ka,volvo'.split(','))    //conversao para array