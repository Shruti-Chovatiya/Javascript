const userName = "shruti";
const score = 23;

console.log(`Hello my name is ${userName} and my score is ${score}.`);

const myName = new String("shruti chovatiya");
console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase()); 
console.log(myName.charAt('3'));
console.log(myName.indexOf("t"));

const newString = myName.substring(3,6);
console.log(newString);

const sliceString = myName.slice(-16,-9);
console.log(sliceString);
console.log(myName.trim()); // removes spacing in string from starting and ending

const url = "https://shruti.com/shruti%20chovatiya"
console.log(url.replace('%20','-'));
console.log(url.includes('shruti'));

console.log(myName.split(' '));



