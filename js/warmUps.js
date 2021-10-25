"use strict"
// function typeCheck(input){
//     if (typeof input === 'string'){
//         return "Haha thats a string of a string"
//     }else{
//         return typeof input;
//     }
// }
// console.log('');
// console.log(isNaN());
// typeCheck(!false * 3);
// typeCheck(4 + ‘4’);

//write a program that console.logs the numbers from 1 - 100. But for the multiples of three console.log  "fizz" instead of the number and for the multiples of five console.log 'Buzz'. For numbers which are multiples of both 3 and 5 console.log "FizzBuzz"
//
// for (var fiz = 1; fiz <= 100; fiz++){
//     if(fiz % 3 === 0 && fiz % 5 === 0){
//         console.log("FizzBUzz");
//     }else if (fiz % 3 === 0){
//         console.log("Fizz");
//     }else (buzz % 5 === 0)
//     {
//         console.log("Buzz");
//     }else {
//         console.log(fiz)
//     }
// }

// function secondToLast (arr){
//     return arr(arr.length -3)
// }
// console.log(secondToLast(["1", "2", "3", "4", "5"]));
//
// function moveToEnd (arr){
//    var remove = arr.shift
//    arr.push (remove)
//    return arr;
// }
// console.log(moveToEnd(arr[1, 2, 3, 4]));
//


var pokemon = [
   {
      name: "Squirtle",
      number: "007",
      type: "water",
      weakness: "grass/electic",
      attack: "water pulse",
      description:{
         looks: "Tiny turtle",
         weight: "19.8 lbs",
         height: '1 foot 8 inches tall'
   }
}
]
console.log("My favorite Pokemon is " + pokemon[0].name + ", who is a " + pokemon[0].type + " type pokemon. " + "He is number " + pokemon[0].number + "." + " One of his attacks is " + pokemon[0].attack +". " + "He is " + pokemon[0].description.height + ", " + pokemon[0].description.weight + " and he looks like a " + pokemon[0].description.looks)