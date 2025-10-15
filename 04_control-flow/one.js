//if
const username = "GUTS"
const username2 = "THORS"

if (username == "THORS") {
    console.log(`Hi, myself ${username}`);
    
} else{
    console.log(`Hi, myself ${username2}`);
    
}

const score = 100

if (score < 99) {
    const power = "fly"
    console.log(`User power: ${power}`);
    
} else {
    console.log("Block scope defined");
    
}

const bankBalance = 1000
//if (bankBalance > 600) console.log("Executed"); //yeh implicit function declare hua hai. not a good practice,never write a code like this.

// *************NESTING***************

if (bankBalance > 500) {
    console.log("greater than 500");
    
} else if(bankBalance > 750) {
    console.log("greater than 750");
    
}
else if (bankBalance > 900) {
    console.log("Greater than 900");
    
}
else {
    console.log("GREATER THAN 1000");
    
}

// ************MULTIPLE CONDITION CHECKING***********

const fromIceland = true
const sonOfThors = true
let name = "THORFINN"
const userLoggedInGoogle = true
const userLoggedInFromEmail = true

//both the condition should be true

if (fromIceland && sonOfThors) {
    console.log(`My name is ${name}` );
    
}

//either condition could be true

if (userLoggedInFromEmail || userLoggedInGoogle) {
    console.log("YES I DID IT");
    
}