// /* EXERCISE 1
// Write a function "area" which receives 2 parameters (l1,l2) and calculate 
// the area of the rectangle.
// */
// const CalculateRectangleArea = function ( l1, l2){
// area = l1 * l2
// return area;
// };
// console.log(CalculateRectangleArea(100, 50));


// /* EXERCISE 2
// Write a function "crazySum" which receives two given integers. 
// If the two values are same, then returns triple their sum.
// */
// const crazySum = function (a,b){
//     if(a===b){
//         sum = a + b;
//         sum = sum*3; 
//         console.log(sum);
//     }
//     else{
//         sum = a+b;
//         console.log(sum);
//     }

// }
// console.log(crazySum( 5, 5))

// /* EXERCISE 3
// Write a function "crazyDiff" that computes the 
// absolute difference between a given number and 19. 
// Returns triple their absolute difference if 
// the specified number is greater than 19.
// */
// const crazyDiff = function (a){
//     diff = a - 19;
//     if(diff > 19){
//         diff2 = diff * 3; 
//         console.log(Math.abs(diff2) );
//     }
//     else{
//         diff = a - 19;
//         console.log(diff);
//     }
// }
// console.log(crazyDiff( 60));

// /* EXERCISE 4
// Write a function "boundary" which accept an integer N and returns 
// true if N is within 20 and 100 (included) or equal to 400.
// */
// const boundary = function (n){
//     if(n >= 20 && n <= 100 || n === 400) {
//         console.log(true);
//     }else{
//         console.log("the number you have entered it is not between 20-100 and it is not 400.")
//     }
// }
// console.log(boundary(19));


// /* EXERCISE 5
// Write a function "strivify" which accepts a string S. Add to S "Strive" in front 
// of a given string, if the given string begins with "Strive" then return the original string.
// */
// let A = "Strive";
// const strivify = function (S){
   
//     if(S === A){
        
//         console.log(A);
//     }else{
   
//       console.log(A.concat(S)) ;
//     }
// }
// console.log(strivify("Strive"));

// /* EXERCISE 6
// Write a function "check3and7" which accepts a positive number 
// and check if it is a multiple of 3 or a multiple of 7.
// HINT: Module Operator
// */


    // const check3and7 = function (num){
        
    //     subOfSeven =  num % 7;
    
    //     if(subOfSeven === 0){
             
    //          return(`${num} is a multiple of 7`);
    //     }else{
    //         return(`${num} is not a multiple of 7`);
    //     }

    // }
  
    //     console.log(check3and7(14));
//shife me vone
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically 
a given string (es.: Strive => evirtS).
*/
// const reverseString = function(S1){
//     let splitString = S1.split("");
//     let reverseArray = splitString.reverse();

//     let JArray = reverseArray.join("");
//     return JArray;
// }
// console.log(reverseString("hello"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a 
given string passed as parameter
*/
const upperFirst = function(S2){
    
    var splitStr = S2.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 console.log(upperFirst("hello from the other side"));

 /* EXERCISE 9
Write a function "cutString" to create a new string without the first and 
last character of a given string.
*/
const cutString = function(S3){
    
    let splitString2 = S3.split("");
    const Arrary = splitString2;
  let a =Arrary.slice(1,length-1);
  

    return a;

}
console.log(cutString("hello from albania"));

