let valor
console.log(valor)

valor = null    //ausencia de valor
console.log(valor)
//console.log(valor.toString())   //erro de tipo

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.5
console.log(produto)

produto.preco = undefined   //evitar atribuit undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null    //sem preco
console.log(!!produto.preco)