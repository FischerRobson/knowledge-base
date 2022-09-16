let canal: string = "casada";
let inscritos: number = 1564;

canal = inscritos;
console.log(canal); 

function (a, b) { //nao pode ser implicito pela analise do compilador -> noImplicitAny: true
    return a + b;
}

let qualquer //pode ser implicito pois o compilador entende quais os tipos possiveis
qualquer = 'amor';
qualquer = 154;

function saudar(isManha: boolean) {
    let saudacao: string;
    if(isManha){
        saudacao = "bom dia!"
    }
    return saudacao; //erro pelo strickNullCheck: true -> impede de ser null
}

function noUnusedParameters(a: number, b: number) { //caso noUnusedParameters: true, b irá gerar erro
    return a;
}