function SetUsername (username){
    this.username = username
}

function createUser (username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const Guts = new createUser("Guts", "guts@fb.com", 123)
console.log(Guts);


/* Ab humlog isme call use karenge jo ki current execution context dusre function ko pass karta hai 
    Aur bhi methods hote hai jaise ki bind wagera par isme hume sirf function ka reference hold karke 
    rakhna hai isiliye call

    ab jab bahar se this leke aa rahe ho tab woh ussi ke andar execution context ke liye rehta hai
    bahar use karne ke liye ek alag se call ke baad optionally 'this' use kar sakte hai
*/
