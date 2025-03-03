//shallow copy same share the same reference 
//deep copy does not share the same reference

let myArr = [0, 1, 2, 3, 4];

console.log(myArr[2]);

//array methods
myArr.push(5);
myArr.push(6);

myArr.pop();

myArr.unshift(7);
myArr.shift();


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

console.log(myArr);