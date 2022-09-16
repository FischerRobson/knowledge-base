//never implica que o endpoint nunca sera alcançado
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "ratao",
  preco: -1,
  validarProduto() {
    if (!this.nome || this.preco < 0) falha("Produto inválido!");
  },
};
