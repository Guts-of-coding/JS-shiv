const name = "Shivanshu"
const lastName = "Singh"

// console.log(name + lastName + "Guts"); known as string concatenation ,not a good way for joining strings 

// ***********
// Another Method

console.log(`My name is ${name} and my lastName is ${lastName}`);



const gameName = new String(`GUTSSSS`)

console.log(gameName[0]);
console.log(gameName[4]);


// Another way to access key value in Object

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase);
console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf(`SS`));


const newString = gameName.substring(0,4)
console.log(newString); // isme negative values declare nahi kar sakte

const anotherString = gameName.slice(-3, 1) // isme negative values declare kar sakte hai
console.log(anotherString);





