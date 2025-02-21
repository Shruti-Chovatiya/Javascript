const score = 40

console.log(score);

const balance = new Number(50);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 25.9698
console.log(otherNumber.toPrecision(2)); //counts toPrecision value from staert ex=25.96 = 26

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //en-IN used for indian std value


//maths
//math library comes bydefault in js

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(5.5));
console.log(Math.ceil(4.2)); //gives next number ex= 4.2 = 5
console.log(Math.floor(3.2));//gives current number ex= 3.2 = 3
console.log(Math.max(2,5,10,2));
console.log(Math.min(1,5,0,4));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const max = 10;
const min = 0;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



