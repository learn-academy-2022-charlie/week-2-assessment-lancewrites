# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is a placeholder that can be occupied by arguments. An argument is the useful data that is passed into the parameter.

  Researched answer: Each argument has a parameter with which it is associateed. Parameters are variables used in defining the data the function needs to perform certain actions. Parameters can be arbitrarily named; however it is more useful to use a name that somewhat describes what data will be passed in as an argument. If multiple parameters are identified, then the number of arguments needs to match the number of parameters to be useful. For example, if there are two parameters and three arguments are entered, the function will either ignore the third argument or return an undesirable output, depending on what the function is doing with the arguments entered in the associated parameters.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The predefined parameters that the .map() method can take are: value, index, array. The value is required and the other two are optional. 

  Researched answer: Value, index, and array are the predefined parameters that the .map() method can take. Value is the required parameter while index and array are optional. Since the .map() method iterates through each value at each index in the given array, it is the most important parameter. The method returns a new array based on the values at each index in the input array.



3. What is the difference between map and filter?

  Your answer: Map iterates through a given array and returns a new array with the same number of indexes as the given array. Filter iterates through a given array and returns a new array with the specified values taken out of the the given array.

  Researched answer: Filter iterates through a given array, takes out prescribed items in the array, and places them into a new array. The length of this new array is less than the original array due to the nature of filtering--cherry picking--certain values out of that original array. Map iterates through a given array, modifies the values at each index of the array, and returns a new array with the modified values that is the same length as the input array.



4. What is the difference between a function and a method?

  Your answer: Functions are a set of instructions that return an output that is based on an input that is passed as an argument in its parameter. A method is similar in that it contains a set of an instructions to produce an output, but a method is usually associated with an object.

  Researched answer: Functions are a set of instructions that produce a desired output based on data that has been inputted into the fucntion. Functions can stand on their own within the code, while methods are functions associated with objects. A function can be called by invoking its name; a method must be attached to the name of its associated object using dot notation or bracket notation.



5. What is object destructuring?

  Your answer: Destructuring allows a developer to take values from an object or array and turn them into indivdiual variables.

  Researched answer: Object destructuring assigns elements of an object to new variables. If an object has two properties, for example, destructuring gives each property its own variable. This is useful for calling upon individual properties of an object without calling upon the whole object itself



6. STRETCH: What is hoisting in JavaScript?

  Your answer: From what I remember, hoisting refers to prioritizing a variable that is declared late in the code write-up and being able to call upon it closer to the beginning of the code write-up.

  Researched answer: Hoisting is a default behavior that allows a variable to be used before it has been declared in the proper scope. Hoisting moves declarations to what I think could be considered the "logical top" of the proper scope. However, hoisting does not move initializations (value assignments) to the logical top. So, if a variable is declared and assigned a value AFTER it is used, then the variable will be considered undefined.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: A parent class is closer to a metaphysical ideal of an object; a child class inherits attributes that are associated with that ideal. However, the child class has additional attributes of its own that it did not inherit from the parent class.

2. React: It is a JavaScript library of reusable pieces of code called components that are used to creating user interfaces.

3. React state: a react state is an object that determines how a component behaves.

4. React lifecycle methods: React lifecycle methods are methods that associate with specific phases within the lifcycle of react components. Lifecycle methods can be used to run certain code during these specific phases--each phase has associated lifecycle methods.

5. DOM: Document Object Model. It defines the logical structure of documents and how they are manipulated. It is a standard model for accessing documents implemented by W3C (World Wide Web Consortium).
