const valores = [11.1, 6.7, 8.74, 2.7]
console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores)

valores[6] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, null, false, 'teste')
console.log(valores)

console.log(valores.pop())  //remove o ultimo
delete valores[0]
console.log(valores)
console.log(typeof valores)