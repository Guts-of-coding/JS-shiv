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

//console.log(regularUser.fullname.anotherregularUser.lastname); // Output: Berserk


const kill1 ={1: "Guts", 2: "Thorfinn", 3: "Climber"}
const kill2 ={4: "Griffith", 5: "Johan", 6: "Thorkell"}
const kill3 ={7: "Clover", 8: "Yami"}

// const allkills = {kill1, kill2, kill3} 

// const allkills = Object.assign({}, kill1, kill2, kill3)      very less used; the curly braces are empty because all the values of the objects
                                                                 // will be stored in th empty object
                                                                 // mostly asked

const allkills ={...kill1, ...kill2, ...kill3} // spread operator; mostly used


// console.log(allkills);

// AISA TAB USE KARTE HAI JAB DATABSE SE VALUES AATA HAI 
// VALUES EK ARRAY OF OBJECTS MEIN AATE HAI

const user = [
    {
    name: "Guts",
    age: 27,
},
 {
    name: "Guts",
    age: 27,
},
 {
    name: "Guts",
    age: 27,
},
 {
    name: "Guts",
    age: 27,
},
]

user[2].name
// console.log(newUser2);

// console.log(Object.keys(user));
// console.log(Object.values(user));


// console.log(newUser2.hasOwnProperty("name")); // checks if the object has the property or not


//OBJECT DESTRUCTURING

const course = {
    courseName: "Javascript",
    price: 999,
    courseInstructor: "GUTS",
}

const {courseInstructor} = course
// console.log(courseInstructor);

//console.log(course.courseName);

// API KYA HOTI HAI?
// APNA KAAM DUSRE PAR THOPNA YA FIR DUSRE SE KARWANA 
// FOR EG: ORDERING FOOD IN HOTEL OR ONLINE
// BACKEND SE KUCH VALUES AATI HAI , UN VALUES KO AAP KAISE LIKHTE HAI WOH HOTA HAI API
// VALUES COME IN THE FORM OF JSON

{
    "name": "GUTS",
    "age": 27,
   " email": "Guts@mail.com",
}




