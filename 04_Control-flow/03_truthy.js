const userEmail = [];

if (userEmail) {
    console.log("have mail");
}else{
    console.log("Don't have email");
}


//falsy value 

//false, 0, -0, BigInt 0n, " ", null, undefined, NaN

//truthy value

//"0", "false", " ", [], {}, function(){}

//check empty array
// if (userEmail.length === 0) {
//     console.log("Empty array")
// }

//check empty object
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
    
}

//nulish coalescing operator (??): null undefined

// let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 = undefined ?? 10;

// console.log(val1);

//terniary operator
///condition ? true : false

const iceTeaPrice = 50;
iceTeaPrice > 40 ? console.log("true") : console.log("False");