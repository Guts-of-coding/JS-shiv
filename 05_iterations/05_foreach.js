// foreach loop

const devChars = ['Guts','nakashi','thors']

// for normal function
devChars.forEach( function (value) {
   // console.log(value);
    
} )

// for arrow function

devChars.forEach( (item) => {
  //  console.log(`Characters with best devlopment arc are: ${item}`);
    
} )


function printMe(item){
   // console.log(item);
    
}

devChars.forEach(printMe) // function ko run nahi karna hai woh yeh loop khud par khud kar leta hai 


//it has access to all the things
devChars.forEach( (item, index,arr) => {
   // console.log(item, index, arr);
    
} )


// jab databases se value aati hai tab uske liye mostly yahi use hota hai
// aur har ek value object hoti hai

const myDevChars = [
    {
        mangaName: "Vagabond",
        mangaChar: "Musashi"
    },
    {
        mangaName: "Vinland Saga",
        mangaChar: "Thorfinn"
    },
    {
        mangaName: "Berserk",
        mangaChar: "Guts",
    },
]

myDevChars.forEach( (item) => {
    console.log(item.mangaChar);
    
} )

