const user = {
    username: "GUTS",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to my website` ); //"this" current context ko refer karta hai
        // current context matlab scope ke andar variables ko access karne ke liye jo use hota hai
       // console.log(this);
        
    }

}

/*user.welcomeMessage()
user.username = "THORS" //idhar humne context change kar diya, yaani ki value
user.welcomeMessage()*/

console.log(this); //output: {}

//browser ka global object hai Windows
//node,deno ya java ke kisi bhi environment ka global object hai empty


function showResults() {
    let username = "GUTS"
    //console.log(this.username);  //"this" sirf objects ke andar kaam karta hai , functions ke andar nahi 
    //variable mein hold karne ke baad bhi
}

//showResults() //output: undefined

const showArrowResults = () => {
    let username = "GUTS"
    //console.log(this.username);
    
}

//showArrowResults() //"this" lagane ke baad output: undefined

const addTwo = (num1, num2) => {
    return num1 + num2
}

//console.log(addTwo(2, 5))

//********implicit return *********/

const addTwoAgain = (num1, num2) => num1 + num2

const addOne = (num1, num2) => ({username: "GUTS"}) //object return karne ke liye () ,mein wrap karna hi padega 
// aur '{}' scope open kiya aur uske andar kuch likha toh return keyword
// likha hi padega