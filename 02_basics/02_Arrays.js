const char = ["GUTS", "THORFINN", "CLIMBER" ]
const villian = ["GRIFFITH", "JOHAN", "THORKELL" ]

//char.push(villian)

// console.log(char);
// console.log(char[3][1]);

// const allpeople = char.concat(villian) //concat se sirf 2 strings ko join kar sakte hai; aur woh itna use bhi nahi hota 
// console.log(allpeople);

const all_new_people = [...char, ...villian] //spred() method 2 se jyada strings ko attach kar sakta hai aur mostly yahi use hota hai

//console.log(all_new_people);


const another_array = [1, 2, 3, [4, 5, 6], 7,[8, [9, 10]] ]

const real_array = another_array.flat(Infinity) // naya array with all the elements concatenated

//console.log(real_array);



console.log(Array.isArray("GUTS"))
console.log(Array.from("GUTS")); // converts into array separating each into single elements


console.log(Array.from({name: "GUTS"})); // asked in interview questions regarding this, ; gives an empty array



let name1 = "GUTS"
let name2 = "THORFINN"
let name3 = "BAKI"

console.log(Array.of(name1, name2, name3));


