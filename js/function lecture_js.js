"use strict"

// A function is a block if reusable code that performs a specific task.
// Functions typically take in an input, and produce an output.
// EX: of functions is prompt(); alert (); Number(); etc....
// Whats in the parenthesis is called the arguments.
// Function Structure first write the function, then define the function
//in the argument you want to write what you want the function to do

// Do something
// return something

function todaysDate (greeting) {
    return greeting + Date();
}
// Execute function

var date = todaysDate("Todays date is: ");
console.log(date);