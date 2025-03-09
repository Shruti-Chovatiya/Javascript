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

if (userEmail.length === 0) {
    console.log("Empty array")
}