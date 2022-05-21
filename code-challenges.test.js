// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("div3", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        expect(div3(num1)).toEqual("15 is divisible by three")
        expect(div3(num2)).toEqual("0 is divisible by three")
        expect(div3(num3)).toEqual("-7 is not divisible by three")
    })
})
      
//Here is the good fail:
    // FAIL  ./code-challenges.test.js
    // div3
    //   ✕ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)

    // ● div3 › takes a number as an argument and decides if the number is evenly divisble by three or not

    //   ReferenceError: div3 is not defined

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.
//Create a function called div3 that takes a number as an argument in the parameter
    const div3 = (number) => {
        //if the number argument has a remainder of 0 when divided by 3...
        if(number%3 === 0){
            //return string interpolation of `${number/argument entered} is divisible by three`
            return `${number} is divisible by three`
        } else{ 
            //if the argument in the number parameter does not meet the previous condition, then return string interpolation of `${number/argument entered} is not divisible by three`
            return `${number} is not divisible by three`
        }
    }
//It's green
        // PASS  ./code-challenges.test.js
        // div3
        //   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (2 ms)

//REFACTOR
// //Create a function called div3 that takes a number as an argument in the parameter
        // const div3 = (number) => {
        //     //if the number argument does not have a remainder of 0 when divided by 3...
        //     if(number%3 !== 0){
        //         //return string interpolation of `${number/argument entered} is not divisible by three`
        //         return `${number} is not divisible by three`
        //     } else{
        //          //if the argument in the number parameter does not meet the previous condition, then return string interpolation of `${number/argument entered} is divisible by three`
        //         return `${number} is divisible by three`
        //     }
        // }
// PASS  ./code-challenges.test.js
// div3
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (3 ms)
      




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capIt", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array of words and returns an array with all the words capitalized a string that says hi", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(capIt(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capIt(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Good Fail
        // FAIL  ./code-challenges.test.js
        // div3
        //   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (2 ms)
        // capIt
        //   ✕ takes in an array of words and returns an array with all the words capitalized a string that says hi (1 ms)

        // ● capIt › takes in an array of words and returns an array with all the words capitalized a string that says hi

        //   ReferenceError: capIt is not defined


// b) Create the function that makes the test pass.

// const capIt = (array) => {
//     let newArr = []
//     for(i = 0; i<array.length; i++){
//        newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
       
//     }
//     return newArr
// }

        // PASS  ./code-challenges.test.js
        // div3
        //   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (3 ms)
        // capIt
        //   ✓ takes in an array of words and returns an array with all the words capitalized a string that says hi (2 ms)

//REFACTOR
const capIt = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.substring(1)
    })
}
   
        // PASS  ./code-challenges.test.js
        // div3
        //   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (3 ms)
        // capIt
        //   ✓ takes in an array of words and returns an array with all the words capitalized a string that says hi (1 ms)


        
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
