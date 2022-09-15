{
    {
        {
            { 
                var sera = 'sera?'  //visivel global
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123     //visivel local 
}

console.log(local)