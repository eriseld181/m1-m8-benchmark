//ternary operator takes 3 number, you can think of it like an if condition 
//and gives you the result and put in the variable
const studentAge =15
let showResult = studentAge == 18 ? true : false
console.log(showResult)

//double equality vs triple equality
if(0 == '0'){// convert automatically a string to a number and checks the equality.
    console.log('equal')
}else{
    console.log("different")
}
if(0 == '0'){// check if they type is the same and their values.
    console.log('equal')
}else{
    console.log("different")
}

//objects
//object is a collection of properties
const myObjects = {
name: "john", //first property of the object
age: 32,
isStudent: true// everytime you do a boolean try to add is before propertry to understand that is a boolean
}
console.log(myObjects.name)//gives the value of property 'name'
//in js methods are properties for the objects

//how to access the properties
console.log(myObjects["isStudent"])//method 1
console.log(myObjects.isStudent)//method 2

//how to check if an property exist
if(myObjects.lastName){
    console.log(myObjects.lastName)
}else{
    console.log("does not exist")
}

//delete object properties
delete myObjects.name
console.log("name" in myObjects)// is a boolean that check if the property exist|it returns T/F
//method that returns an object in array
console.log(Object.keys({x: 0, y:0} ))

// how to copy object properties and paste them in another
const obj1 ={
    a:1
}
const obj2 ={}

Object.assign(obj2, obj1)//create an copy of properties of obj1 to obj2
obj2.a =3

// Overwrite the property
obj1.a =2 //object name + property

//Arrays
let listOfNumbers = [1 ,2 ,3 ,4 ,5]//declare an array
console.log(listOfNumbers)//print the array
console.log(listOfNumbers[4])//print the index[4]of an array
console.log("[5]" in listOfNumbers)//check if exist index 5

console.log(" ", listOfNumbers.length)//concat a sting with another variable
//shows the length of the array

const listOfObject = [{x:0, arrayProperty:[2, 2323] } ,2, "qqds" ]
console.log(listOfObject)// array
console.log(listOfObject[0])// object[the first element in array]
console.log(listOfObject[0].arrayProperty)//array which is a property in the first element of the array
console.log(listOfObject[0].arrayProperty[1])//number,secod element of this array property
//how to add new elements in array
listOfObject.push({y:1, arrayProperty:[222,444,555]})// add new element in the last place in array

//remove the last element in array
const lastElement = listOfObject.pop()

//find the index of the actual number of the element in array
const numberList = [2,3,4,5,6 , 5]
console.log(numberList.indexOf(5))
console.log(numberList.lastIndexOf(5))// last index of second 5

//split the array based on the start index and end index
console.log(numberList.slice(2,4))
//concat the arrays
const newArray = numberList.concat([4,5,6,7])
console.log(newArray)

//Loops, loop and array
const array = [2,31,13,4546]
console.log(array.length)
for(let index =0; index <array.length; index++){
console.log("index: ", index);
console.log("element: ", array[index])
}
//another option to show array elements
for(let entry of array){

    console.log("element: ", entry)
    }