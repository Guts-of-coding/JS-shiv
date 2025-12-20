class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const guts = new User("guts")
console.log(guts.createId())

// agar aap ek ka access dusre ko nahi dena chahte then aapko static use karna chahiye.
// aur yeh kaam mostly confidential information wagera mein kaam aata hai
