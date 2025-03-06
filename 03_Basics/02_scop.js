// let a = 10;
// const b = 20;
// var c = 30;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner",b);

}

// console.log(a);
// console.log(b);
console.log(c);

function one() {
    const userName = "Shruti";

    function two() {
        const website = "YouTube"
        console.log(userName);
    }
    // console.log(website);
    
    two()
}
// one()

if (true) {
    const userName = "shruti";
    if (userName === "shruti") {
        const website = " YouTube"
        console.log(userName + website);
        
    }
    // console.log(website);
}
// console.log(userName);


function addOne(num) {
    return num + 1;
}

addOne(8);

const addTwo = function (num) {
    return num + 2;
}

addTwo(8);

console.log(addTwo(8));
