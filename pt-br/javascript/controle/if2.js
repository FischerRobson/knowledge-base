function teste1(num){
    if(num > 7)
            console.log(num)    //sem {} so inclui a primeira linha
        console.log('final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {  //cuidado com ;
        console.log(num)
    }
}

teste2(6)
teste2(8)