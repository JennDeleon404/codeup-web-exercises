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
//4.
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
