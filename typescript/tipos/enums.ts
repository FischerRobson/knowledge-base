enum Cor {
  Cinza, //0
  Verde, //1
  Azul, //2
  Vermelho = 3, //atribuicao de valor, interfere nos valores posteriores
  Dourado = 3, //possivel duplicar valores
}

let corTeste = Cor.Azul; //2
