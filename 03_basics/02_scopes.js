let a = 10
const b = 20
var c = 30

/*{} isse kehte hai scope. don't confuse it with object declaration
  jab yeh kisi function ke saath aata hai ya fir kisi if-else loop ke saath tab isse uss funtion ka scope kehte hai*/
 
  if (true){
    let a = 10  //log of this will give error
    const b = 20   //log of this will give error
    var c = 30    //log of this gives result,i.e 30 that's why we don't use var
  }

  //value declare in scope should remain inside and not go outside of it
  //issue still persists if we don't use var and just write 'c'
// values declared inside block is known as block scope
// values outside of block are known as global scope

function one(){
  const username = "GUTS"

  function two(){
    const website = "GITHUB"

    console.log(username);
    
  }
 // console.log(website); //since it was defined outside the block that's why we couldn't access it

  //two()  //execution is done line by line, isiliye two execute nahi hua toh one bhi nahi hoga
  
}

one()  //function ka scope yaha tak hota hai

if (true) {
  const username = "GUTS"
  if (username == "GUTS") {
    const website = "Github"
    //console.log(`${username} + ${website}`);
    
  }
  //console.log(website);
  
}
//console.log(username);    condition ka scope yaha tak nahi hota isiliye yeh line bhi execute nahi hoga


// ++++++++++++++++++++++++++interesting++++++++++++++++


//addONE(5)  jab declaration pehle likh dete hai, log() karne ke tab koi farak nahi padta aise type mein
function addOne(num) {
  return num + 1
}

 console.log(addOne(5));

//addTwo(5) =>par jab aise declare kiya jata hai koi function kisi variable mein toh declaration agar pehle kiya hai toh execute nahi hoga
 const addTwo = function (num) {
  return num + 2
 }

console.log( addTwo(5));

  