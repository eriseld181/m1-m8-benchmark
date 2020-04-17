// //Strings
// let number = 2;
// const myString = `first line
// second line
// this is my value ${2+5} `
// console.log(myString);
// const myString2 = "dummy text";
// myString2.slice(3,1);

// console.log(myString2);
// const sentece ="hello strivers, we are trying split method";
// const words = sentece.split (" ");
// console.log(words);

//function definition

const squareFunction = function(num){
    result = num*num;
    return result;
}
console.log(5);

const makkeNoiseWithParameter = function(noise){
    console.log(noise);
    console.log(noise);
    console.log(noise);
    console.log(noise);
}
makkeNoiseWithParameter('bark');
makkeNoiseWithParameter('meow');
// functions with parameters
const Sum = function(a, b){
    return a+b;
}
console.log(Sum(100, 200));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns 
true if N is within 20 and 100 (included) or equal to 400.
*/
const boundary = function (n){
    if(n >=20 && n<=100 || n ===400) {
        console.log(true);
    }
}