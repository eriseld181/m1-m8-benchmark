/* 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"*/
let x = "john";
let y = "joe";
console.log(x ,"<>", y)
let myObject ={
    name:"miri",
    surname: "maxell",
    email: "mirimaxell@gmail.com" 
}
console.log(myObject)
delete myObject.email;

console.log(myObject)
let myArray = ["beni", "miri", "genci", "klejdi", "vini", "diego", "lorenco", "irene", "sofia","ina" ];
console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5])
console.log(myArray[6])
console.log(myArray[7])
console.log(myArray[8])
console.log(myArray[9])
let myRandomArray =[]
for(let i =0; i<100;i++ ){
let random = Math.floor(Math.random()*100+1);
myRandomArray.push(random);
}
console.log(myRandomArray)


function minAndMaxFunction(){
    
    console.log( "min number is ", Math.min(...myRandomArray ),"max number is ",  Math.max(...myRandomArray ) )
}

    
let myArrayOfArrays = []

let myArray3 = []
for(let i =0; i<10;i++ ){
let random = Math.floor(Math.random()*10+1);
myArray3.push(random);
}
let myArray4 = []
for(let i =0; i<10;i++ ){
let random = Math.floor(Math.random()*10+1);
myArray4.push(random);
}

myArrayOfArrays = myArray3 + ","+myArray4;
console.log(myArrayOfArrays)

    function findTheBiggestArray(){
        if(myArrayOfArrays.length > myArray3.length){
            console.log(myArrayOfArrays)
        }
        else{console.log(myArray3)}

    }
    function findTheBiggestSumArray(){
        let ArraysumOfmyArray4 = myArray4.reduce(function(a, b){
            return a + b;
        }, 0);
        let ArraysumOfmyArray3 = myArray3.reduce(function(a, b){
            return a + b;
        }, 0);
          if(ArraysumOfmyArray3 > ArraysumOfmyArray4){
            return  console.log("the biggest sum is array4", ArraysumOfmyArray4)
        }else{
            return  console.log( ArraysumOfmyArray3 )
        }  
        
    }
   


    
/*JS EXERCISES

       
    
        DOM 

        -31) Get element with ID "container" from the page
       - 32) Get every "td" from the page
       - 33) Create a cycle that prints the text inside every td of the page
       - 34) Write a function to change the heading of the page
        -35) Write a function to add an extra row to the table
       - 36) Write a function to add the class "test" to reach row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list

        EXTRA 

        41) Add an eventListener to alert when the mouse is over a link, displaying the URL
        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change the a single TD backgrund color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over
        49) Write a function to add a table with 4 rows and 3 lines programmatically
        50) Write a function to remove the table from the page*/