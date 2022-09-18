# advanced-typescript

## Custom types

```ts
type CustomType = number | string; // union type
```

## Intersection types

Combine objects type, or intersection between custom types.

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Robson',
  privileges: ['admin'],
  startDate: new Date(),
}
```

Or

```ts
interface Admin {
  name: string;
  privileges: string[];
};

interface Employee {
  name: string;
  startDate: Date;
};

interface ElevatedEmployee extends Admin, Employee {
}

const e1: ElevatedEmployee = {
  name: 'Robson',
  privileges: ['admin'],
  startDate: new Date(),
}
```

```ts
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number
```

## Type guards

Infer the type during runtime.

```ts
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}
```

```ts
type UnknowEmployee = Admin | Employee;

function printEmployeeInfos(emp: UnknowEmployee) {
  console.log('Name' + emp.name);
  if ('privileges' in emp) { // you cant use (typeof emp === "Admin") cause Javascript don't know this type!
    console.log('Privileges' + emp.privileges);
  }
  if ('startDate' in emp) { // you cant use (typeof emp === "Admin") cause Javascript don't know this type!
    console.log('Start Date' + emp.startDate);
  }
}
```

Using instanceof with classes.

```ts
class Car {
  drive() {
    console.log('driving...')
  }
}

class Truck {
  drive() {
    console.log('driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo: ' + amount);
  }
}


type Vehicle = Truck | Car;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) { // 'loadCargo' in vehicle
    vehicle.loadCargo(1000);
  }
}

```

## Discriminated union

Has a common property in all interfaces

```ts
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  groundSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = 0;
  switch (animal.type) {
    case "bird": speed = animal.flyingSpeed; break;
    case "horse": speed = animal.groundSpeed; break;
  }
  ret
```

## Type casting

```ts
const userInputElement = <HTMLInputElement>document.getElementById('user-input'); // getElementById return type HTMLElement

const userInputElement = document.getElementById('user-input') as HTMLInputElement;
```

Casting while access properties:

```ts
(userInputElement as HTMLInputElement).value
```