// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(JSON.stringify(myDate));
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 16 )
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // time measured un miliseconds from the year 1970 jan 1

// console.log(myCreatedDate.getMinutes());
// console.log(Math.floor((Date.now()/1000)));

let newDate = new Date()
// console.log(newDate.getTimezoneOffset());
console.log(newDate.getMonth() + 1); // basic syntax for calculating month in projects


newDate.toLocaleString('default', {
    era: "long",
})
// let myCreatedDate = new Date(2009, 3, 16)   month '0 se start hota hai yeh format mein
//let myCreatedDate = new Date(2009, 3, 16, 5, 8) // jitna aage info dete jayege utna woh bifurcate karega
                                                 // for eg. year,month,date,time,day,minutes,hours etc
                                                 
let myCreatedDate = new Date("2022-12-18")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //compare karne ke liye humesha milisecond mein compare karna chaiye

// above method when building booking websites aur apps

console.log(Math.floor(Date.now()/1000));  // for conversion in minutes

let newDate = new Date()
console.log(newDate);








