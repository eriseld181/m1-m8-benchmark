// STRINGS

//String literals
// let myNumber = 2

// const myString = `First line
// Second line
// This is my value ${2 + 3}
// `
// console.log(myString)

// const myString = 'whatever'

// myString.slice(3,6)

// myString.indexOf('a')

// myString.trim()

// alt+9+6 --> Backtick `
// const sentence = `Hello strivers we are trying split method`
// const splittedWords = sentence.split(" ")

// console.log(splittedWords)

// console.log(splittedWords.join(",    "))

// console.log("asd".repeat(5))

// let myPI = Math.PI
// console.log(myPI)

// FUNCTION

// // FUNCTION DEFINITION

// const squareFunction = function(num){
//     // BODY OF THE FUNCTION = the code of the function
//     const square = num * num
//     return square
// }

// // FUNCTION EXECUTION

// const resultOfSquareOfTwo = squareFunction(2)
// const resultOfSquareOfFour = squareFunction(4)
// const resultOfSquareOfSix = squareFunction(6)
// const resultOfSquareOfFiveHundred = squareFunction(500)

// console.log("2 * 2: ",resultOfSquareOfTwo)
// console.log("4 * 4: ",resultOfSquareOfFour)
// console.log("6 * 6: ",resultOfSquareOfSix)
// console.log("500 * 500: ",resultOfSquareOfFiveHundred)

// // DEFINE A FUNCTION WITH ZERO PARAMETERS

// const barks = function(){
//     console.log('BARKS')
//     console.log('BARKS')
//     console.log('BARKS')
//     console.log('BARKS')
//     console.log('BARKS')
//     console.log('BARKS')
//     console.log('BARKS')
// }

// barks()

// // DEFINE A FUNCTION WITH ONE PARAMETER AND DOES NOT RETURN ANYTHING

// const makeNoiseWithParameter = function(noise){
//     console.log(noise)
//     console.log(noise)
//     console.log(noise)
//     console.log(noise)
//     console.log(noise)
//     console.log(noise)
//     console.log(noise)
// }

// makeNoiseWithParameter('MEOW')
// makeNoiseWithParameter('BARK')

// FUNCTION WITH MULTIPLE PARAMETERS

// const sum = function(a, b){
//     let localSum = a+b
//     return localSum
// }

// const sumResult = sum(4,2)

// console.log('SUM RESULT 4+2: ', sumResult)

// console.log(sum(100,21312321321)) // a = 100, b = 21312321321

// console.log(sum(12323,43434)) // a = 12323, b = 43434

// SCOPES

// let x = 10

// if(true){
//     let y = 20
//     let z = 30
//     console.log(x+y+z)
// }

// console.log(y+z)


// OTHER DECLARATIONS


// let sum = function(a, b){
//     let localSum = a+b
//     return localSum
// }


// function sum2(a, b){
//     let localSum = a+b
//     return localSum
// }

// let launchMissiles = function(){
//     console.log('Rocket Launched!')
// }

// if( safeMode){
//     launchMissiles= function(){}
// }

// const squareFunction = function(x){
//     console.log
//     const square = x * x
//     return square
// }

// const square = x => {
//     console.log(this)
//     return x * x
// }

// const square = x => x * x // 2015