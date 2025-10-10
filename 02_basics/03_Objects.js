// singleton ; constructor se object banta hai toh uska ek hi instance hota hai isiliye singleton .... asked in interview
// for eg: Object.create()

// let 


// Object literals

const mySymb = Symbol("key1") //Symbol ko use karne se pehle usse define karna padega
// console.log(mySymb);  aise value toh print ho jayegi but uska typeof symbol nahi hoga

const Jsuser = {
    name: "GUTS",
    email: "shiv@google.com",
    [mySymb]: "Myself Symbol", // agar symbol use karna hai toh [] use karna padega aur access karne ke liye bhi [] use karna padega
    "fullname": "GUTS SHIV",   // isko dot notation se dikha hi nahi sakte
    age: 20,
    isLoggedin: true,
    isUser: false,
}

// console.log(Jsuser.email); // dono tareeke pata hone chaiye dot notation and bracket notation
// console.log(Jsuser["email"]);
// console.log(Jsuser["fullname"]);
// console.log(typeof Jsuser[mySymb]);

Jsuser.email = "shiv@gpt.com"
//Object.freeze(Jsuser) // object ko freeze karne se usme koi bhi change nahi ho sakta, jiske bhi baad lagado uske baad
Jsuser.email = "shiv@mail.com"
// console.log(Jsuser.email);

Jsuser.greeting =  function(){
    console.log("Hii my name is GUTS");
    
}

//console.log(Jsuser.greeting); // aise likhne pe output mein undefined milta hai
console.log(Jsuser.greeting());


Jsuser.greetingTwo =  function(){
    console.log(`Hello GUTS here ${this.name}`);
    console.log(Jsuser.greetingTwo());} 