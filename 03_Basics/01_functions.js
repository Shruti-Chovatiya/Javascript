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

// console.log(loginUserMsg());

// const print = loginUserMsg("shruti");
// console.log(print);

// function calcCartValue(...num1) {
//     return num1;
// }
// console.log(calcCartValue(200, 500, 700));

const user = {
    userId : 1,
    userDetail : "student"
}

function objectOfUser(anyobject) {
    console.log(`The id of user is ${anyobject.userId} and the detail of that user is ${anyobject.userDetail}`);
    
}

// objectOfUser(user);

objectOfUser({
     userId : 1,
    userDetail : "student"
})


const myNewArr = [100, 200, 500, 900];

function returnSecondValue(getarray) {
    return getarray[3]
}

console.log(returnSecondValue(myNewArr));
