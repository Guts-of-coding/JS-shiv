const anyArr = [1, 2, 3, 4]

//const myArr = anyArr.reduce( function (acc, currentval) {
    //console.log(`acc: ${acc} and currentval: ${currentval}`);
    
   // return acc + currentval
//}, 3 ) // yeh accumulator ki inital value hai '0'

// kuch bhi initial value de sakte hai

//console.log(myArr);

////////for arrow function

const myArr = anyArr.reduce( (acc, currentval) => {
    //console.log(`acc ${acc} and currentval ${currentval}`);
    
    return acc + currentval
}, 0 )

//console.log(myArr);


const shoppingCart = [
    {
        mangaName: 'Berserk',
        mangaChar : 'Guts',
        mangaPrice: 999
    },
    {
        mangaName : 'Vagabond',
        mangaChar : 'Musashi',
        mangaPrice: 999
    },
    {
        mangaName : 'Vinland Saga',
        mangaChar : 'Thorfinn',
        mangaPrice: 999
    },
    {
        mangaName : 'Homunculus',
        mangaChar : 'Nikashi',
        mangaPrice: 999
    },
]

const totalChar = shoppingCart.reduce( (acc, item) => {
    return acc + item.mangaPrice
}, 0 )

console.log(totalChar);





