const myArr = [1, 2, 3, 4, 5]

/*const newArr = myArr.map( (num) => {
    return num =  num + 10
}) */

// CHAINING

const myArrays = myArr
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num > 25 )
            


console.log(myArrays);
