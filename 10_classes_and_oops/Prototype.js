// Humara challenge yeh hai ki hume ek method banana hai jo string ka true length bata sake.

 let myHeroes = ["Guts", "Thors", "Grin"]

 let heroPower = {
    Guts: "Sword",
    Thors: 'NO weapons',
    Grin: "Smile",

    getThorsPower: function(){
      console.log(`Thors Power is ${this.Thors}`);
      
    }

 }

 Object.prototype.shiv = function(){
    console.log(this.heroPower);
    
 }

 heroPower.shiv()

 /* prototype ek hierarchical searching karta hai. woh agar result jo user ko chaiye
 agar usse woh nahi milta toh upar ke levels pe search karta rehta hai.  */ 

 // syntax for prototyple inheritance

 Object.setPrototypeOf//(//something of, to something)