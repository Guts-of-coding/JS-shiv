const userEmail = "shiv@gpt.com"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("Not user email");
    
}

//output: Got user email, because string ke value ko man liya gaya hai ki woh true hi hai
// bina koi comparison ke


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", 'false', " ", [], {}, function(){}

// for array empty detection

/*if (userEmail === 0) {
    console.log("Array is empty");
    
}*/

// for object empty detection

/*const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}*/


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10

// Terniary Operator

condition ? true : false