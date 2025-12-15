const user = {
    username: "GUTS",
    loggedInCount: 8,
    isLoggedIn: true,

    getUserDedtails: function(){
        console.log(`Username: ${this.username}`);
        // "this" ka use hota hai current context batane ke liye.
    }
    
}

//console.log(user.username);
//console.log(user.getUserDedtails());

//PromiseOne = new Promise() // "new" keyword use hota hai taaki aap purane instance ko change na karo. isko constructor function bolte hai
                            // agar nahi use kiya toh purane instance ko naya instance overwrite kar dega

function User(username, isLoggedIn, age){
    this.username = username,
    this.isLoggedIn = isLoggedIn,
    this.age = age
}

const userOne = new User("Guts", true, 20)
const userTwo = new User("Thors", false, 35)

console.log(userOne);





