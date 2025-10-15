
// forin loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby'

}

for (const key in myObject) {
    //console.log(myObject[key]);
    
}

// it can be used for array as well
// accessing is same for both Array and Objects by square notation

const myArr = ['Hello', 'Bye', 'Hey', 'Yess']

for (const key in myArr) {
    console.log(myArr[key]);
    
}

// maps can't be printed using this
// because they are not itretable

