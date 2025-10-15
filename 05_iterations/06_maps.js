const  devChars = ['Guts','nakashi','thors']

const values = devChars.forEach( (item) => {
    //console.log(item);
    return item
} )

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => {  // filter true or false wala case hai. condition jaisa
   return( num > 4)
} )
//console.log(newNums);

const oneNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        oneNums.push(num)
    }
} )

//console.log(oneNums)



