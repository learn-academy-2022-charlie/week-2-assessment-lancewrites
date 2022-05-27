// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
//console.log(cohort.split(""))

// a) Your answer: ["B", "r", "a", "v", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: I was somewhat correct: It did give me an array with a string of each character at each index. However, my terminal is showing each string with single quotes instead of double quotes like what I wrote above. From my research, it seems that the terminal returned the strings with single quotes in order to make it obvious that the values at each index are strings.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: I think it will return undefined.
// b) Verify and explain: I was correct. Since greeter is a function, it needs to have a defined return in order for it to show the string interpolation in the terminal. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct. The .map() method modifies the values at each index in the previous array. In this case it multiplied the value at each index by 2 and returned a new array of the same length as the old array, but with the new values.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: I was correct. During each iteration the .filter() method takes out from the input array only the values that meet the specifications in its argument, and puts them into a new array. The value%2 divides each iteration's value by 2 and returns the remainder of that quotient as its value. If the value at the concurrent iteration returns a remainder of 0 it is even; if it returns a remainder of 1, then it is odd. The value of value%2 is then determined to either be 0 or not 0. If value%2 does not strictly equal 0 (value%2 !== 0) then the original value at that particular iteration is placed into a new array. The loop happens until the end of the first array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: I was correct. "JavaScript" is at the zeroth index of the array in the languages property in the myCodingSkills object.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I am not too sure regarding what it would look like in the terminal--I still haven't completely grasped what happens. But I am pretty sure that "George" will be involved because it was properly passed as an argument in the name parameter.
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 }. So, in the terminal there is an object in the Learn class with "George" properly associated with the student key.
