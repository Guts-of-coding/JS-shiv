function whoistheRealGoat(){                //// isse kehte function
    // console.log("Messi is the Goat");    
    // console.log("Messi is the Goat");    // isse kehte hai function definition , jo bhi kuch curly braces ke andar likha hai usse
    // console.log("Messi");
    // console.log("Messi");
    // console.log("Messi");
    // console.log("Messi");
    
}

whoistheRealGoat()  // round bracket lagane se function run hota hai

// function declare karte wakt jo round bracket mein pass karte hai usse kehte hai "Parameters". isme datatype batana 
//  hota hai 

function WorldcupWinner(number1, number2){
    // console.log(number1 + number2);
    
}

WorldcupWinner(1, "0") // Aur jo function call karte wakt value pass ki jati hai usse kehte hai Arguements

function addTwoNumbers(num1, num2){
    let result = num1 + num2   //result ko ek variable mein pehle store kar liya hai

    //fir hum likhenge return result 
    return result

    //ab return ke baad kuch bhi likhenge toh woh execute nahi hoga
    // jaise ki
    console.log("Shivanshu");

    // ya fir itna likhne se aacha hai ki aap seedha hi return resutl likh do
    return num1 + num2
    
}

const result = addTwoNumbers(3, 7)

// console.log("Result: ",result );

function loginUserMessage(username){
    return `${username} has logged in`
}

// console.log(loginUserMessage("Shivanshu"));


function calculateCartPrice(num1){
    return num1
}
calculateCartPrice()
console.log(calculateCartPrice(7));


// par cart mein customer items add karte chala jata hai toh fir single item hi show karega 
// baaki ke items ke liye we cant write num1,num2,..... and so on
// isiliye we use rest and spread operator

// lets take the code

function calculateCartPrice(...num1){
    return num1
}
calculateCartPrice()
console.log(calculateCartPrice(7,100,2,300,400,600)); // the 3 dots is the rest operator. isse use karne se kam se kam 
                                                        // value ek array mein toh store hoti hai

const user = {
    username: "GUTS",
    price: 999
}   

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

handleObject(user)

handleObject({
    username: "Shivanshu",
    price: 299
})

const myOwnArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
    
}
console.log(returnSecondValue(myOwnArray));


