/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/



const month = 3
//agar case mein string liya hai toh string likh do "" iske andar 

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break; //agar break nahi hota toh jo case pe match ho gaya uske baad ke saare cases execute ho jaate hai
    case 5:
        console.log("Apr");
        break;

    default:
        console.log("Match any of the case");
        
        break;
}

