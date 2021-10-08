"use strict"

console.log("Hello from external JavaScript")

alert("Welcome to my Website!");

var favoriteColor = prompt("What is you favorite color?");
alert("Great " + favoriteColor + " is my favorite color too!");

var firstMovie = parseFloat(prompt("How many days did you rent The Little Mermaid?"));
var secondMovie = parseFloat(prompt("how many days did you rent Brother Bear?"));
var thirdMovie = parseFloat(prompt("how many days did you rent Hercules?"));
var total = ((firstMovie + secondMovie + thirdMovie) * 3);
alert('Your total will be: ' + total + " dollars");

var google = parseFloat(prompt("How many hours did you work at Google?"));
var amazon = parseFloat(prompt("how many hours did you work at Amazon?"));
var facebook = parseFloat(prompt("how many hours did you work at Facebook?"));
var grossPay = (google * 400) + (amazon * 380) + (facebook * 350);
alert('Your gross pay will be: ' + grossPay + " dollars");

var classHasSpace = confirm("Is there room in the class at 8 A.M.?")
var scheduleClear = confirm("Are you free to take classes M-F at 8 A.M.?")

alert("You can sign up! " +(classHasSpace && scheduleClear));

// --- sad path

var classFull = confirm("Is the class full?");
var classConflict = confirm("Are you free to take classes M-F AT 8 A.M.?")

alert("Student cant take classes. " + (!classFull && !classConflict));

var isMember = confirm("Are you a premium member?");
var howManyItems = parseInt(prompt("How many items do you have?"))
var isOfferValid = confirm("Is this offer still valid?");
var discountApplied = isOfferValid && (howManyItems >= 2 || isMember);
alert("Discount applied" + discountApplied);
/* THE ITEMS DOWN HERE ARE WHAT I DID BUT I DID THEM WRONG, THATS WHY I HAVE THE COPIED ITEMS ^^^
var returnOfAlert2 = alert("In order to see if you can attend class, you need to make sure both of the following are true!");
console.log(returnOfAlert2);
var fullClass = confirm("Make sure the class is NOT full");
console.log(fullClass)
var returnOfAlert3 = alert("Make sure your schedule dose NOT conflict with your work schedule.");
console.log(returnOfAlert3);
var youCanAttend = alert("If neither the class are full or your schedule conflicts, you can attend!");
console.log(youCanAttend)

var returnOfAlert4 = alert("WAIT! You can get a half off discount if you buy two items!");
console.log(returnOfAlert4)
var premiumMember = true
console.log(premiumMember)
var notExpired = true
console.log(notExpired)
var twoItems = 2
console.log(twoItems)
if (premiumMember && notExpired && twoItems) {
    println("You're eligible for the discount!");
}
if (premiumMember || notExpired || twoItems) {
    println("Sorry you're not eligible for the discount");
}

 */