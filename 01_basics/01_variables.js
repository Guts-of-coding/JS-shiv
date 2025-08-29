const accountID = 020508 
let accountEmail = "shiv@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountID = 2 // not allowed

accountEmail = "some@son.com"
accountPassword = "12345"
accountCity = "Jaipur"
let accountState

console.log(accountID);

console.table([accountEmail, accountPassword, accountCity,accountState])


/*
prefer not to use var
because of issue in block scope and functional scope
*/