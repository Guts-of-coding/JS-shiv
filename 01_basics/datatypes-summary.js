// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is dynamically typed language


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 45795744626876n

// Reference (Non Primtive)\

// Array, Objects, Funtions



const heroes = ["ben","thor","hulk"];
let myObj = {
    name : "shiv",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// non primitive has return type object
// function return type is object function

//  *************************************************************************

// types of memory
// Stack(Primitive) idhar variable milta hai,original value ka copy milta hai ; Heap(Non Primitive) idhar variable ka reference milta hai,actual chnages ke liye

let myName = "shivanshu"

let anotherName = "babu"
anotherName = "Guts"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "mymail@google.com"

console.log(userOne.email);
console.log(userTwo.email);


