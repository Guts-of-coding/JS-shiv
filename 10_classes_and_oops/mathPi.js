const guts = Object.getOwnPropertyDescriptor(Math, "Pi")
//console.log(guts);  // isse aap jo bhi property aap describe karte hai usse aap check kar
// sakte hai

const berserk = {
    name: "Guts",
    age: 25,
    gender: "male"
}

console.log(berserk);

//console.log(Object.getOwnPropertyDescriptor(//"Object ka naam", "jiski property aapko dekhni hai"));


console.log(Object.getOwnPropertyDescriptor(berserk, "name"));

Object.defineProperty(berserk, 'name',{
    writable: false,
    enumerable: false,
})  // isse aap apne khud ke described elements ka property change na ho woh kar sakte hai

