const fruits = ["apple", "banana", "grapes"];
const colors = ["red", "yellow", "green"];

// console.log(fruits);
// console.log(colors);

// fruits.push(colors);
// console.log(fruits);

const conArray = fruits.concat(colors)
console.log(conArray);

const allArrays = [...fruits, ...colors] //spread
console.log(allArrays);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const use_anither_array = another_array.flat(2);
console.log(use_anither_array);

console.log(Array.isArray("shruti"));
console.log(Array.from("shruti"));

let score1 = 200;
let score2 = 100;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


