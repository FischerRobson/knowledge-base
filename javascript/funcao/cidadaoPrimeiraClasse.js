//funcao em JS e First-Class Object

//forma literal
function fun1(){ }

//armazenar em variavel
const fun2 = function () { }

//armazenar em array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//passar func como param
function run(fun){
    fun()
}

run(function () { console.log("Executando")})

//uma funcao pode retornar/conter uma func
function soma (a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cinco = soma(2, 3)
cinco(4)