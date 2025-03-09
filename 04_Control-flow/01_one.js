//if
const isUserLoggedIn = true;

if (true) {
    console.log(`user is logged in`);
    
}

//<, >, <=, >=, ==, !=, ===

const balance = 1000;

// if (balance > 500) {
//     console.log(`enough balance`);
// }else{
//     console.log(`Balance is not enough`);
    
// }

// if (balance > 500) console.log(`enough balance`);

// if (balance < 500) {
//     console.log(`balance is less than 500`);
// }else if (balance < 750) {
//     console.log(`balance is less than 750`);
// } else if (balance < 900) {
//     console.log(`balance is less than 900`);
// }else{
//     console.log(`balance is 1000`);
// }

const userLoggedIn = true;
const debitCard = true;
const userGoogle = false;
const userEmail = true

if(userLoggedIn && debitCard){
    console.log(`you can purchase`)
}

if(userGoogle || userEmail){
    console.log(`you can log in`)
}
