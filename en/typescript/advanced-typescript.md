## Custom Types

```ts
type CustomType = number | string; // union type
```

## Intersection Yypes

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

## Type Guards

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

## Discriminated Union

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

## Type Casting

```ts
const userInputElement = <HTMLInputElement>document.getElementById('user-input'); // getElementById return type HTMLElement

const userInputElement = document.getElementById('user-input') as HTMLInputElement;
```

Casting while access properties:

```ts
(userInputElement as HTMLInputElement).value
```

## Index Properties


```ts
interface ErrorContainer {
  id: string; // cant be a number cause index
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  id: '1',
  email: 'invalid email'
}

const errorBagTwo: ErrorContainer = {
  id: '1',
  username: 'invalid username'
}
```

## Function Overloadings

```ts
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add(1, 2) as number; // the type is Combinable
const result2 = add('Robson', ' Fischer') as string;
```

Using overloading, you dont need to cast type:

```ts
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add(1, 2);
const result2 = add('Robson', ' Fischer');
```

## No Optionals

Instead of: 

```ts
type ServerData = {
  status: 'Success' | 'Error' | 'Loading'
  data?: { id: string; message: string }
  error: Error
}
```

Use:

```ts
type ServerData = {
  status: 'Loading'
} | {
  status: 'Success'
  data: { id: string; message: string }
} | {
  status: 'Error'
  error: Error
}
```

## Generics

A basic example:

```ts
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0]
}

const numbers = [1,2,3]
const firstNum = getFirstElement(numbers)
```
Typescript default uses generics implicit.

```ts
type ApiResponse<Data> = {
  data: Data,
  isError: boolean
}

// default status type
type ApiResponse<Data = {status: number}> = {
  data: Data,
  isError: boolean
}

// Data must be object
type ApiResponse<Data extends Object> = {
  data: Data,
  isError: boolean
}
```

Now using this:

```ts

type UserData = { name: string; age: number }
type BlogData = { title: string }

const userResponse : ApiResponse<UserData> = {
  data: { name: 'john doe', age: 28 },
  isError: false
}

const blogReponse : ApiResponse<BlogData> = {
  data: { title: 'The title'},
  isError: false
}
```

## Predicate

If you are checking the type of an object, for example:


```ts
type User = {
  id: string
  name: string
}

type Employee = User & {
  email: string
}

const people: (User | Employee)[] = []

people.forEach(people => {
  if("email" in people) {
    console.log('My email is:' + people.email)
  } else {
    console.log('user:' + people.name)
  }
})
```

But if you want to extract the check for a function:

```ts
people.forEach(people => {
  if(isEmployee(people)) {
    console.log('My email is:' + people.email)
  } else {
    console.log('user:' + people.name)
  }
})


// must type return, or return type will be just boolean
function isEmployee(person: User | Employee): person is Employee {
  return "email" in people
}

```
