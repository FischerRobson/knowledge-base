## Any x Unknown

```ts
const resp = await fetch('someapi');

const badUser = await resp.json(); // badUser has type any

const goodUser: unknown = await resp.json();
if(isAdminUser(goodUser)) {
  // ...do some code
}

if(isRegularUser(goodUser)) {
  // ...do some code
}
```

## Is

```ts
type Species = "cat" | "dog";

interface Pet {
  species: Species;
}

class Cat implements Pet {
  public species: Species = "cat";
  public meow(): void {
    console.log("Meow");
  }

  public jump(): void {
    console.log("Jumping...");
  }

  public walk(): void {
    console.log("Walking...");
  }
}

function petIsCat(pet: Pet): pet is Cat {
  return pet.species === "cat";
}

function petIsCatBoolean(pet: Pet): boolean {
  return pet.species === "cat";
}

const p: Pet = new Cat();

//Bad ❌
// p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.

if (petIsCatBoolean(p)) {
  // p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.

  (p as Cat).meow();

  //What if we have many properties? Do you wanna repeat the same casting
  //Over and over again...
}

//Good ✅
if (petIsCat(p)) {
  p.meow(); // now compiler knows for sure that the variable is of type Cat and it has meow method
}

export {};
```

## Satisfies

```ts
//Custom interface for rendering images
interface ICustomImage {
  data: string;
  width: number;
  height: number;
}

//Sample of a Custom Image
const myCustomImage: ICustomImage = {
  data: "base64",
  width: 200,
  height: 150,
};

//Image type for the user
type UserImage = string | ICustomImage;

//User interface
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: UserImage;
}

//Bad ❌
const badUser: IUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: "image-url",
};

//Good ✅
const goodUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: myCustomImage,
} satisfies IUser;

export {};
```

## Enum

```ts


//Bad ❌
enum BadState {
  InProgress,
  Success,
  Fail,
}

BadState.InProgress; // (enum member) State.InProgress = 0
BadState.Success; // (enum member) State.Success = 1
BadState.Fail; // (enum member) State.Fail = 2

const badCheckState = (state: BadState) => {
  //
};
badCheckState(100);

//Good ✅
type GoodState = "InProgress" | "Success" | "Fail";
enum GoodState2 {
  InProgress = "InProgress",
  Success = "Success",
  Fail = "Fail",
}

const goodCheckState = (state: GoodState2) => {};

goodCheckState("fsdgfsgf");

export {};
```

## Utility Types

```ts
/*
- Partial
- Record
...
*/

//Product ✅

interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
}

// interface IUpdateProduct {
//   title?: string;
//   description?: string;
//   thumbnail?: string;
//   price?: number;
//   rating?: number;
// }

function updateProduct(
  productId: IProduct["id"],
  updatedProduct: Partial<Omit<IProduct, "id">>
) {
  // updatedProduct.
}

//Record ✅

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color: Record<Properties, RGB | string> = {
  red: [255, 0, 0],
  green: "green",
  blue: "blue",
};

export {};
```
