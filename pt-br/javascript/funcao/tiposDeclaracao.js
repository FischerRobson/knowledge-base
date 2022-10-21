console.log(soma(3, 4))
console.log(sub(3, 4))


//function declaration - faz hoisting
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}

//narred function express
const mult = function mult (x, y){
    return x * y
}