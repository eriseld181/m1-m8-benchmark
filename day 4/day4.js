//STRINGS

//three differend string declaration
const myStrings = "string declaration 1"
const myStrings2 = 'string declaration 2'
const myStrings3 = `string declaration 3`

//why we need `string`(string literals)
let myNumber =5
 const myString4 = `first line
 second line
 this is my value ${myNumber}`
 console.log(myString4)
 
 //String methods
 const myString5 = 'whatever'

 //method Slice: it will split the string based on start index and end index(without including the last index)
 myString5.slice(3,6)

 // returns the index of character
myString5.indexOf('a')

//method trim: remove white spaces from the string
myString5.trim 

//method Split:
const sentece = 'helllo strivers we are trying split method'
const splittedWords = sentece.split(" ")//by spaces
console.log(splittedWords)//output: array of strings

//method join: joins the strings (*doesnt work)
const sentece2 = 'hello strivers we are trying split method'
//by spaces
console.log(sentece2.join(", "))//output: array of strings

//math operation
console.log(Math.random)

//FUNCTION: is very usefull to wrap a piece of code and we can
//reuse it everytime

const squareFunction = function (x){
    //body of the fntion = the code of the function
    return x*x
}
const resultOfTheFunction = squareFunction(2)
console.log(resultOfTheFunction)
console.log(squareFunction(4))
console.log(squareFunction(8))
console.log(squareFunction(20))

//define a function with no parameters
const makeNoise = function(){
    console.log('dog barks')
    console.log('dog barks again')
}
makeNoise()

//change the function
const makeNoiseWithParameter = function(noise){
    console.log(noise)
    console.log(noise)
}
makeNoiseWithParameter('meow')
makeNoiseWithParameter('bark')
//function with miltiple parameters
const sum = function (a,b){
    return a+b
}
console.log(sum(6,8))

//OTHER DECLARATIONS
const sum1 = function(a,b){
    let localSum = a+b
    return localSum
}
function sum2(a,b){
    let localSum = a+b
    return localSum
}

//arrow function notation:use to create functions in simple way
const square2 = x => {}
const square3 = x => x*x