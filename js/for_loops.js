"use strict";
//1. done

//2.
function showMultiplicationTable(num){
    for ( var i = 1; i <= 10; i++){
        var result = num * i;
        console.log(num + " * " + i +" = " + result);
    }
}
showMultiplicationTable(8)

//3.
for (var i = 1; i <= 10; i++) {
    var csc = Math.floor(Math.random() * (180) + 20);
    if (csc % 2 === 0) {
        console.log(csc + " is even")
    }
    else {
        console.log(csc + " is odd");
    }
}
// ^^ that's my answer, below is what was shown in class

//var randomNumber = math.floor(Math.random() * (180) + 20);
//if (randomNumber % 2 === 0){
//console.log(randomNumber + " is even number");
//} else {
//console.log(randomNumber + ' is an odd number.");
//  }
//}

var x = "";
for (var more = 1; more <= 9; more++) {
    for (var i = 1; i <= more; i++){
        x += more + "";
    }
    console.log(x);
    x = ""
}
//5.
for (var ok = 100; ok >= 5; ok-= 5) {
         console.log(ok);
}

for (let i = 0; i < 10; i++){

}
console.log(i)


// Practice on same assigment to see if I can get done faster

//1.
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTables(num){
    for (var x = 1; x <= 10; x++){
        var result = x * num;
        console.log(num + " * " + x + " = " + result);
    }
}
showMultiplicationTables(8);


//2.
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (var y = 20; y <= 200; y ++){

}
