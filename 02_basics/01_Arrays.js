// array

const myArr = [0, 1, 2, 3, 4, 5, true, "GUTS"] // it is still an array  /even if it does not contain same type of values
console.log(myArr[3]); // for accessing the value at index 3

const myChar = ["GUTS", "THORFINN" ]
console.log(myChar[0]);



const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);

// Array Methods

// myArr.push(9) // Adds a value at end of the array
// myArr.pop() // Need not pass any value and it removes the last entered value in the array
console.log(myArr);

// myArr.unshift(5) //Adds a value at the start of the array
// myArr.shift() // removes the value from the start of the array
console.log(myArr);

console.log(myArr.includes(8)); // checks if the value is present in the array or not
console.log(myArr.lastIndexOf(6)); // gives -1 if value is not present in the array

const newArr = myArr.join()
console.log(myArr);

console.log(newArr);
console.log(typeof newArr);













