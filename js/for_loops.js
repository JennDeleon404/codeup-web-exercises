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
var count, more;
for (count = 1; count >= 9; count++){
    for (more = 1; more <= count; more++)

}

