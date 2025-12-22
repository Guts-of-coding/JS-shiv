class Guts{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }
}

const GUTS = new Guts("guts@berserk.com", 1234)
console.log(GUTS.email);

// agar aap samne wale kisi chiz ka access nahi dena chahte then aap getter aur setter user kar sakte ho
// getter aur setter dono saath mein hi use karna padta hai
// getter mein humesha return value aati hai
// setter mein kabhi bhi return nahi aata hai
