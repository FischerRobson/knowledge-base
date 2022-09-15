//par nome/valor

const saudacao = 'ola'  //contexto lexico 1

function exec(){
    const saudacao = 'hello'    //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares/valor

const cliente = {
    nome: 'pedro',
    idade: 90,
    endereco: {
        logadouro: 'rua legal',
        numero: 55
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)