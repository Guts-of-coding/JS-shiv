class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const thors = new User("guts", "guts@fb.com", 2910)

console.log(thors.changeUsername());
console.log(thors.encryptPassword());

/*
bina classes ke bhi function likh ke same kaam ho sakta hai
*/

