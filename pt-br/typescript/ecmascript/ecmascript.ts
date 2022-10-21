console.log(hoisting)
var hoisting = "?"

let estaFrio = true;
if (estaFrio) {
    //var acao = "colocar casada" //global
    let acao = "colocar casada"
}

console.log(acao)

const somar = function (n1: number, n2: number): number {
    return n1 + n2;
}

const subtrair = (n1: number, n2: number): number => n1 - n2;

function comThis() {
    console.log(this);
}
comThis();

const comThisEspecial = comThis.bind(2);
comThisEspecial(); //2

const comThisArrow = () => console.log(this);
comThisArrow(); //this global, pois é dependente do contexto