// ISME HUM DISCUSS KARENGE OBJECTS KO SINGLETON KAISE KAR SAKTE HAI 
// YA FIR UNKO CONSTRUCTOR KI HELP SE KAISE DECLARE KAR SAKTE HAI

const newUser = new Object(); // Output : {}  singleton object
// ya fir
const newUser2 = {}; // Output : {}  non-singleton object
newUser2.name = "GUTS"
newUser2.id = "123GUTS"
newUser2.isLoggedin = true
// console.log(newUser2); 

// you can do how much nesting you want and can access it through dot in log
const regularUser = {
    fullname: {
        anotherregularUser: {
            firstname: "Guts",
            lastname: "Berserk",
        }
    }
}

console.log(regularUser.fullname.anotherregularUser.lastname); // Output: Berserk


const kill1 ={1: "Guts", 2: "Thorfinn", 3: "Climber"}
const kill2 ={4: "Griffith", 5: "Johan", 6: "Thorkell"}
const kill3 ={7: "Clover", 8: "Yami"}

// const allkills = {kill1, kill2, kill3} 

// const allkills = Object.assign({}, kill1, kill2, kill3)      very less used; the curly braces are empty because all the values of the objects
                                                                 // will be stored in th empty object

const allkills ={...kill1, ...kill2, ...kill3} // spread operator; mostly used


// console.log(allkills);

const user = {
    name: "Guts",
    age: 27,
}
const user2 = {
    name: "Guts",
    age: 27,
}
const user3 = {
    name: "Guts",
    age: 27,
}
const user4 = {
    name: "Guts",
    age: 27,
}



