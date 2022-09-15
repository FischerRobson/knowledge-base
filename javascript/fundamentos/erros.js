function tratarErro(erro){
    //throw new Error('...')
    throw false
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!")
    }
    catch (e){
        tratarErro(e)
    }
    finally{
        console.log('final')
    }
}

const obj = {nome: 'robson'}
imprimirNomeGritado(obj)