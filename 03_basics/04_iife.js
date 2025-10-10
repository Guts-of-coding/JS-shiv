//Immediately Invoked Function Expressions (IIFE)

(function execute() {
    console.log(`DB CONNECTED`);
    
})();

// use karne ke karan
// function immediately execute ho jaye
// global scope ke karan jo problems hoti hai uske liye

(() => {
   console.log(`DB CONNECTED TWO`);
    
})()