// for of

const { map } = require("d3")

/*for (const element of object) {
    the object declare here is not the js object it simply
    means ki konse object pe lagana hai loop
}*/

const charArray = ["G","U","T","S"]

for (const char of charArray) {
   // console.log(charArray);
    
}

const learningDay = "Friday"

for (const day of learningDay) {
    //console.log(`Today's day is ${learningDay}`);
    
}   // same could be done for num and objects as well


// Maps

const char = new Map()  //it's an Object , aur jis order mein value enter ki 
// hai us order mein bhi rehti hai

char.set('GUTS', "BERSERK")
char.set('Thorfinn', "Vinland")
char.set('Musashi', "Vagabond")

//console.log(char);

for (const [key, value] of char) { // agar array jaisa print nahi karwana then use square bracket
   // console.log(key, ':-', value);
    
}

const myObject = {
    Game1: 'COD',
    Game2: 'Red Dead Redemption',
    Game3: 'God OF War'

}

for (const [key, value] of myObject) { // since object is not iteratable in this manner it shows error
    console.log(key, ':-', value);
    
}

