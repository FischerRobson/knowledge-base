function returnName() {
  return "robson";
}

function returnName2(): string {
  return "robson";
}

function sayHello(): void {
  console.log("oi");
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

//const teste: (number, number) => number

const teste = function (a: number, b: number): boolean {
  return a > b;
};
