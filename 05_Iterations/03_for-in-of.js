// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(`the number is ${num}`);
// }

const greet = "Hello World!";

// for (const i of greet) {
//     if (i === ' ') continue;
//     console.log(`Each word is ${i}`);
// }

const map = new Map()
map.set('stv', "surat");
map.set('blr', "Bengaluru");
map.set('del', "delhi");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }

const myObject = {
    grapes : "Green",
    banana : "Yellow",
    papaya : "Orange"
};

for (const key in myObject) {
   console.log(`the key is ${key} and value is ${myObject[key]}`);
   
}
