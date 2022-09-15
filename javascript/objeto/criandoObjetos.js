//usando notacao literal
const obj1 = {}
console.log(obj1)
console.log(typeof obj1, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto("caneta", 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

//funcao factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const fun1 = criarFuncionario('joao', 7980, 4)
const fun2 = criarFuncionario('maria', 11400, 1)
console.log(fun1.getSalario(), fun2.getSalario())

//object.creat
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//JSON
const fromJSON = JSON.parse('{"info": "sou um json"}' )
console.log(fromJSON.info)