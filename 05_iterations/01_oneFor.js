// for loop

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

for (let i = 0; i <= 10; i++) {
    const element = [i];
    if (element == 5) { //until value reaches 5 this loop won't run
     //console.log("GUTS IS THE BEST OF ALL");
        
    }
   // console.log(element);
    
}

//console.log(element++); // outside of the block scope

//*****************LOOP INISDE LOOP **************//

//const charName = "GUTS"
//const villName = "GRIFFITH"

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j < 9; j++) {
        //console.log(`Inner loop value ${j} and outer loop vlaue ${i}`);
           
    }
    
}


let myCharNames = ["Sebastian", "EVOX", "NEUFUO"]

for (let index = 0; index <= myCharNames.length; index++) {
    const element = myCharNames[index];
    console.log(element);
    
}

// break and continue

for (let i = 0; i <= 20; i++) {
    console.log(`Value of i is ${i}`);
    if ( i == 5) {
        console.log(`Hello I am ${i}` );
        break;
    }
    
    console.log("Hello");
    
    
}
for (let i = 0; i <= 20; i++) {
    console.log(`Value of i is ${i}`);
    if ( i == 5) {
        console.log(`Hello I am ${i}` );
        continue;
    }
    
    console.log("Hello");
    
    
}