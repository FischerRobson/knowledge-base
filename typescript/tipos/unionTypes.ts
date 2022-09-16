//ao inves de any, utilizar o union types

let nota = 10; //infere o tipo number
nota = "10"; //erro

let nota2: string | number = 10;
nota2 = "10";
