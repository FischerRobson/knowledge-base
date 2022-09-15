function Produto(nome = '', preco = 0, desc = 0, imposto = 0.1){
    this.nome = nome,
    this.preco = preco,
    this.desc = desc,
    this.imposto = imposto,

    this.getPreco = (moeda) => `${nome}: ${moeda} ${this.preco * (1 - this.desc) * (1 + this.imposto)}`

}

const prod1 = new Produto()
const prod2 = new Produto('notebook', 5000, 0.9, 0.6)

console.log(prod1.getPreco())
console.log(prod2.getPreco('$'))
console.log(prod2.getPreco('&'))