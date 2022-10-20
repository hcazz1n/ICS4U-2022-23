// join
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.join());
// console.log(fruits.join('--'));

// push
// fruits.push("Kiwi"); //pushed a string onto the fruits array
// console.log(fruits.join());
// fruits.push(5);
// console.log(fruits.join());
// fruits.push(["Strawberry", "Blueberry"]); //pushed an array onto the fruits array
// console.log(fruits.join());

// console.log(JSON.stringify(fruits));

// pop
// console.log(fruits.pop());
// console.log(fruits.join());

// shift
// console.log(fruits.join());
// console.log(fruits.shift());
// console.log(fruits.join());

// unshift
// console.log(fruits.unshift("Balls"));

// concat
// fruits = fruits.concat(['Strawberry', 'Blueberry']);
// console.log(JSON.stringify(fruits));

// slice
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Cherry"];
fruits.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits);