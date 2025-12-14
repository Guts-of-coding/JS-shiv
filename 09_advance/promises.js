const PromiseOne = new Promise(function(resolve, reject){
    //Does an Async Tasks
    // DataBase calls, cryptography, network
    setTimeout(function(){
        console.log("Async completed");
        resolve()
    },1000)
}) 
//Promise ek object hota hai aur usse ek object ki tarah hi lete hai.
// promise hume task ka completion kab hoga yeh batata hai.

//promise ko consume bhi karna padta hai
// .then() ka seedha seedha connection hai reslove ke saath
PromiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// ab isem humlog resolve se values pass karenge
const PromiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("1 task processing");
        resolve(username= "GUTS", email= "guts@berserk.com")
    }, 1000)
})

PromiseTwo.then(function (user) {
    console.log("1 task completed");
    
})


//ab error aaye toh kaise usse catch karte hai.

PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false
        if(!error){
            resolve(username = "GUTS")
        }else{
            reject('Error is there')
        }
    }, 1000)
})

PromiseThree.then((user) => {
    console.log(user);
    return user.username    
}).then((username) => {
    console.log(username);    
}).catch((error) => {
    console.log(error);    
}).finally(() => console.log("The promise either resolved or rejected")
)  // yeh aata hai ye batane ke liye kyuki promise ka bhi ek time limit hota hai. toh fir yeh hume batata 
    // hai ki jo kaam hona tha woh hua ki nahi. aur yeh humesha hi run hota hai.

PromiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(username = "GUTS")
        }else{
            reject('Error is occuring')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFour
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }// you can either write like this or the above method
}