function Pessoa (nome ) {
    this.nome = nome,
    this.falar = function (){
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('carlos')
p1.falar()