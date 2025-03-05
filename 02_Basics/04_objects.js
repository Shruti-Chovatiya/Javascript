//singleton object 
// const socialApp = new Object()

// non singleton object
const socialApp = {}

socialApp.id = "123as";
socialApp.name = "shruti";
socialApp.isLoggedin = false;

// console.log(socialApp);

const user = {
    email : "shruti@gmail.com",
    fullname : {
        userFullname :{
            firstname : "shruti",
            lastname : "chovatiya"
        }
    }
}

// console.log(user.fullname.userFullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3= {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(socialApp));
// console.log(Object.values(socialApp));
// console.log(Object.entries(socialApp));
// console.log(Object.hasOwnProperty("name"));

//destructure object
const info = {
    book : "javascript",
    price : "950",
    writer : "john"
}

console.log(info.book);

const{writer} = info;

console.log(writer);

