function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2   //ou
    const comprarTv50 = trab1 && trab2  //e
    const comprarTv32 = trab1 != trab2  // xor
    const manterSaudavel = !comprarSorvete   //unario 
    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}   //atributo == const
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
