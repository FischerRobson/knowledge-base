let hobbies = ["amigo", "casada", "larapio"];
hobbies = [100, 20]; //inferido a string

let newHobbies: any[] = ["amigo", "casada", "larapio"];
newHobbies = [100, 20]; //aceito, pois infere o tipo any
newHobbies = 100; // não é um array
