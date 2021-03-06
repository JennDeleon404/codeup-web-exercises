"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message thats related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    switch(color){
        case "blue":
            return(color + " is the color of my favorite berry.")
        case "red":
            return(color + " is the color of an apple.")
        case "cyan":
            return(color + " is a bluish greenish color.")
        default:
            return(color + " is a color I dont know about.")
    }
}
console.log(analyzeColor("orange"))
console.log(analyzeColor("blue"))
console.log(analyzeColor("red"))
console.log(analyzeColor("cyan"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// ^^ the switch answer is up there, I changed the original answer
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("What is your favorite color?");
    alert(analyzeColor(color));

/* ########################################################################## */
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
prompt("Enter a number from 0 -5")
function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return (0)
        case 1:
            return total - (.10 * totalAmount)
        case 2:
            return total - (.25 * totalAmount)
        case 3:
            return total - (.35 * totalAmount)
        case 4:
            return total - (.50 * totalAmount)
        case 5:
            return (0)
    }
}



// you can also get rid of the first line of luckyNumber 0 and
// make the last line default:
// return total;
//break;

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


var userTotal = parseFloat(prompt("What is your total bill?"));
//alert ("Your lucky number was " + luckyNumber + "Your total was " + userTotal + "your new total is " + (calculateTotal((luckyNumber, userTotal).tofixed(2)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var answer = confirm("Would you like to enter a number between 0 to 6?")
if (answer) {
    var newNumbers = parseFloat(prompt("Type in your number down below"))
    if (isNaN(newNumbers)) {
        alert("That is not a number!")
    }
    else {

        if (newNumbers % 2 === 1) {
            alert(newNumbers + " is odd.")
        } else {
            alert(newNumbers + " is even.")
        }
        alert("That number plus 100 is " + (newNumbers + 100));
        if (newNumbers > 0) {
            alert(newNumbers + " is a positive number.")
        } else {
            alert(newNumbers + " is a negative number.")
        }
    }
}
function newNumber(price, discountPercent) {
    return (price * discountPercent);
}
console.log(newNumber(45.99, 0.12));