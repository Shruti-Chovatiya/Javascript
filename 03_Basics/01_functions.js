// function userName(){
//     console.log("SHRUTI");
    
// }
// userName();

// function addTwoNum(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNum(3,5);

function addTwoNum(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}


const result = addTwoNum(3,5);
// console.log(`result is ${result}`);


function loginUserMsg(username = "john") {
    // if (username === undefined) {
    if (!username) {
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg());

// const print = loginUserMsg("shruti");
// console.log(print);

