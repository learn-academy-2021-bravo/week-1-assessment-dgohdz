// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//(Pseudo code) 
//input - numbers 
//output - string indicating below boiling, above boiling, at boiling

/*var temp1 = 35
var temp2 = 350
var temp3 = 212
//function
const boiling = (temp) => {
//if the temperature is strictly equal to 212 then return with "is at boiling point."
    if(temp === 212) {
        return (`${temp} is at boiling point`)
// or else if the temperature is greater than or equal to 350, return "is above boiling point"
    } else if(temp >= 350) {
        return (`${temp} is above boiling point`)
// or else if the temperature is less than or equal to 35, return "is below boiling point"
    } else if(temp <= 35) {
        return (`${temp} is above boiling point`)
    }

//I'm stuck. I'm not sure why my log doesn't output properly.
console.log(boiling(212));
}*/





// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

//input array of numbers
//output - array of numbers multiplied by 5

/*var myNumbers1 = [3, 7, 0, 6, -9]
const multi5 = (array) => {
//initializing variable "let" to store name of the new numbers.
    let newArray = []
//input a loop to count through every number in the variable.
    for(let i=0; i<array.length; i++){
//pushed the new array in the loop to multiply by five.
        newArray.push(array[i] * 5)
    }
    return newArray
}
//logged the function to multiply the variable by 5.
console.log();*/





// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

/*var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
//inut - array of numbers
//output - array of odd numbers
const oddNums = (array) =>{
//newArray is the placeholder for index
    let newArray = []
//insert a loop to go through the index of characters in the var myNumbers2
    for(i=0; i<array.length; i++){
//modulo 2 with bang symbol to not equal zero.
        if(array[i] % 2 !=0){
            newArray.push(array[i])
        }
    }
    return newArray

}
console.log(oddNums(myNumbers2));*/





/*// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowels = (Vowels) =>{
    if([1]=e,)
    else()
}

//Worked with Guillermo until 1am. Looked through notes and got stuck.
//I believe I have to include conditionals connecting the index characters,
//but I can't figure it out.
console.log(noVowels(stringWithVowels1));*/




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"
