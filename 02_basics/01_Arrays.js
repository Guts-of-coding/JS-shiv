// array

const myArr = [0, 1, 2, 3, 4, 5] // it is still an array  /even if it does not contain same type of values
console.log(myArr[3]); // for accessing the value at index 3

const myChar = ["GUTS", "THORFINN" ]
console.log(myChar[0]);



const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);

//Array Methods

myArr.push(9) // Adds a value at end of the array
myArr.pop() // Need not pass any value and it removes the last entered value in the array
console.log(myArr);

myArr.unshift(5) //Adds a value at the start of the array
myArr.shift() // removes the value from the start of the array
console.log(myArr);

console.log(myArr.includes(8)); // checks if the value is present in the array or not
console.log(myArr.lastIndexOf(6)); // gives -1 if value is not present in the array

const newArr = myArr.join() // arrays ke value ko join karke ek string banata hai
console.log(myArr);

console.log(newArr);
console.log(typeof newArr);

// slice , splice ; interview mein bhi iske regarding poocha jata hai

console.log("A", myArr);

const myn1 = myArr.slice(2,4) // returns a section of an array, 4th value include nahi kiya hai ; dost not change the original array 
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(2,4) // removes the value from array of passed index and it affects the original array
console.log("C" , myn2);






















