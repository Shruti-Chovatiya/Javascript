//singleton

const mySymbole = Symbol("key1")
//object literals
const jsUser = {
    name : "shruti",
    age : 21,
    [mySymbole] : "mykey1", //use [] for symbole
    location : "bangalore",
    email : "shruti@gmail.com",
    isLoggedin : false
}

console.log(jsUser.age);
console.log(jsUser["name"])
console.log(jsUser[mySymbole]);

jsUser.age = 22;
// Object.freeze(jsUser);
// console.log(jsUser);

jsUser.greetings = function () {
    console.log("hello good evening");
}

jsUser.greetingTwo = function () {
    console.log(`hello good evening ${this.name}`);
}

console.log(jsUser.greetings());

console.log(jsUser.greetingTwo());

