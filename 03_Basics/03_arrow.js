// const user = {
//     userName : "amazon",
//     price : 999,

//     welcomeMessage: function () {
//         console.log(`${this.userName}, welcome to website`);//this keywoed refers to current context
//         console.log(this); //gives whole object
        
//     }
// }
// user.welcomeMessage();
// user.userName = "flipkart";
// user.welcomeMessage();


// console.log(this);//outside of the function

// function one(){
//     let  userName = "Shruti"
//     console.log(this.userName); //gives undefined
    
// }
// one()

// const one = () => {
//     userName = "Shruti"
//     console.log(this);
// }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return function 

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);


// console.log(addTwo(4, 6));

( function myFunction(){
    console.log(`connected`);
  
})();


( (name) => {
    console.log(`connected to ${name}`);
}) ("shruti");


//excecution context
// global excecution context
// functional excecution context

//javascript runs in two phases
//1.memory creation phase  - alloactes the memory
//2.execution phase - 