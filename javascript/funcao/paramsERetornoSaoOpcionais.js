function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}`)
    }
    else{
        return area
    }
}

console.log(area(2, 5))
area(10, 3)
area(10)
area()
area(10, 3, 5, 3)