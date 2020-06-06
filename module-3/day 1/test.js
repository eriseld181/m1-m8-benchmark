/*
1)
Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.

let num1 = 5
let num2 = 5
let sum = 0
if(num1===num2){
    sum=3*(num1 +num2)
    console.log(' the sum of these equal numbers are :', sum)
}else{  sum=num1 +num2
    console.log('sum of these numbers are:', sum)
}
*/
    
/*
2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 
or if their sum is 50.

let num3 = 30
let num4 = 20
let numTest = 50
if(num3 == numTest || num4 === numTest || num3 + num4 === numTest){
 console.log(true)
}else console.log(false)
*/




/*3)
Write a JavaScript program to remove a character at the specified position of a 
given string and return the new string.

let myString = 'welllcome'
let myArray =Array.from(myString)

myArray.splice(2,1)

let newString = myArray.join('');
console.log(newString)
*/

/*

4)
 Write a JavaScript program to find the largest of three given integers.
 let num5 = 5 
 let num6 = 8
 let num7 = 7
 let numMax = Math.max( Math.max(num5, num6) , num7) 
 console.log(numMax)
 */


/*5)Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

let num7 =30
let num8 =20

var myArray1 = [];
var myArray2 = [];

for (var i = 40; i < 61; i++) {
    myArray1.push(i);
}

for (var i = 70; i < 101; i++) {
    myArray2.push(i);
}

if(myArray1.includes(num7) || myArray2.includes(num8))
console.log(true)
else 
console.log(false)
*/

/*
6) 


Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function string_copy (myString, num9) 
{
  if (num9 < 0)
    return false;
  else
  return myString.repeat(num9);
}
console.log(string_copy("dffdf ", 2));
*/

/*7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
let stringLos = 'Los Angeles'
let stringNew = 'New York'
let myString = 'New'

if(stringLos.substring(0,2).localeCompare(myString) ){
console.log( stringLos)
}else if ( stringNew.substring(0,2).localeCompare(myString)) {
    console.log(stringNew)
    
}else { console.log("")} //error
*/
/*8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
let array2= [1, 2, 3 , 4]
 let sum = array2[0] + array2[1] + array2[2]
 console.log(sum)
*/

/*
9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 

let array2= [4, 2]
if( array2.includes(1) || array2.includes(3) ){
    console.log(true)
}else console.log(false)
*/
/*10)

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
let array3= [1, 3]
if( !array3.includes(1) || !array3.includes(3) ){
    console.log(true)
}else console.log(false)
*/
/*11)

Write a JavaScript to find the longest string from a given array of strings.
let myString1 = 'alban111111222'
let myString2 = 'albaniii'
if(myString1.length > myString2.length)
    console.log(myString1 ,  myString1.length )
else  
console.log(myString2 ,  myString2.length )
*/

/*
12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
     let typesOfAngles = 180;
    var myArray3 = [];
    var myArray4 = [];
    
    for (var i = 0; i < 90; i++) {
        myArray3.push(i);
    }
    
    for (var i = 90; i < 180; i++) {
        myArray4.push(i);
    }


    if( myArray3.includes(typesOfAngles) )
        console.log(typesOfAngles, "is Acute angle")
    else if(typesOfAngles == 90 )
    console.log(typesOfAngles, "is Right angle")

    else if(myArray4.includes(typesOfAngles) )
    console.log(typesOfAngles, "is btuse angle")
    else if(typesOfAngles == 180 )
    console.log(typesOfAngles, "is  Straight angle")
    else 
    console.log("invalid")*/
   

/*13)

Write a JavaScript program to find the index of the greatest element of a given array of integers 
var array = [5 , 64, 42, 56, 32, 35, 89, 32];
var largestNumber= 0;
let index = 0

for (i=0; i<=largestNumber;i++){
    if (array[i]>largestNumber) {
        var largestNumber=array[i];
        index = i;
    }
}

console.log(largestNumber , index);
*/

/*14)

Write a JavaScript program to get the largest even number from an array of integers.*/
/**/

var array33 = [5 , 64, 42, 56, 32, 35, 89, 32];
var largestNumber= 0;


for (i=0; i< array33.length;i++){

    if (array33[i]% 2 === 0) {
        var largestNumber=array33[i];
   
    }
}

console.log(largestNumber);


/*






15)

Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

17)

Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 

18)

Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).

*/
