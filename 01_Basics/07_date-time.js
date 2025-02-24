let myDate = new Date()
// console.log(`tostring-`,myDate.toString());
// console.log(`tolocalstring-`,myDate.toLocaleString());
// console.log(`toDateString-`,myDate.toDateString());
// console.log(`toISOString-`,myDate.toISOString());
// console.log(`toJSON-`,myDate.toJSON());
// console.log(`toLocaleTimeString-`,myDate.toLocaleTimeString());
// console.log(`toLocaleTimeString-`,myDate.toLocaleTimeString());
// console.log(`getTimezoneOffset-`,myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,21) //month starts from 0
// console.log(myCreatedDate.toDateString());
// let myDateTime = new Date(2025, 1, 23, 5, 4);
// console.log(myDateTime.toLocaleString());

// let myDateFormat = new Date("01-25-2025");
// console.log(myDateFormat.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDateFormat.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// newDate.toLocaleString("default", {
//     weekday: "long"
// });