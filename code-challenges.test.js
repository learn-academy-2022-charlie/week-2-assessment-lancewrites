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

  
    it("takes in an array of words and returns an array with all the words capitalized", () => {
  
      
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
        //   ✕ takes in an array of words and returns an array with all the words capitalized  (1 ms)

        // ● capIt › takes in an array of words and returns an array with all the words capitalized a string that says hi

        //   ReferenceError: capIt is not defined


// b) Create the function that makes the test pass.
            //Create a function called capIt that takes an array as an argument in the parameter
//             const capIt = (array) => {
//                 // creat a new variable called newArr that produces a new array
//                 let newArr = []
//                 //the for loop iterates through each index of the array passed as the argument of capIt
//                 for(i = 0; i<array.length; i++){
//                     newArr consists of the string at each index of the original array with the first letter uppercased
//                 newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
                
//                 }
//                 //newArr outputs
//                 return newArr
// }

        // PASS  ./code-challenges.test.js
        // div3
        //   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (3 ms)
        // capIt
        //   ✓ takes in an array of words and returns an array with all the words capitalized (2 ms)

//REFACTOR
            //create a function called capIt that takes in an array as the argument for the parameter
            const capIt = (array) => {
                //return higher order function .map() to iterate through each index in the array argument
                return array.map(value => {
                    //the value at each index returns the uppercase of the value at zeroth index and includes the rest of the string starting at index 1
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

describe("whereVowel", () => {

    it("takes in a string and logs the index of the first vowel.", () => {
  
      expect(whereVowel(vowelTester1)).toEqual(1)
      expect(whereVowel(vowelTester2)).toEqual(0)
      expect(whereVowel(vowelTester3)).toEqual(2)
    })
  })
//The Good Failure
//   FAIL  ./code-challenges.test.js
//   div3
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (2 ms)
//   capIt
//     ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)
//   whereVowel
//     ✕ takes in a string and logs the index of the first vowel. (1 ms)

//   ● whereVowel › takes in a string and logs the index of the first vowel.

//     ReferenceError: whereVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
        //Create function called whereVowel that takes in a string as an argument for the parameter
        const whereVowel = (string) => {
            //turn the string entered as an argument into an array with each character occupying its own index
            let array = string.split("")
            //since .findIndex() needs a function to call upon, create a function that individually compares each value to each vowel
            function checkVal(i) {
                return i === "a" || i === "e" || i === "i" || i === "o" || i === "u"
            }
            return (array.findIndex(checkVal)) //.findIndex() executes my function for each array element and returns the index of the first element that passes the checkVal test
       
        }    

//I would refactor, but this particular challenge took about 6 hours of my life. I originally tried to figure it out with written-out loops and other things on the syllabus. However, I will celebrate this victory with a moscow mule

            // PASS  ./code-challenges.test.js
            // div3
            // ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (10 ms)
            // capIt
            // ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)
            // whereVowel
            // ✓ takes in a string and logs the index of the first vowel. (1 ms)
