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
console.log("My favorite Pokemon is " + pokemon[0].name + ", who is a " + pokemon[0].type + " type pokemon. " + "He is number " + pokemon[0].number + "." + " One of his attacks is " + pokemon[0].attack +". " + "He is " + pokemon[0].description.height + ", " + pokemon[0].description.weight + " and he looks like a " + pokemon[0].description.looks);

//Create a function that pulls in the array and returns only Canadian wrestlers

var wrestlers = [
   {
      name: "Bret Hart",
      nationality: "Canadian"
   }, {
      name: "Shawn Michaels",
      nationality: "American"
   }, {
      name: "Christian Cage",
      nationality: "Canadian"
   }, {
      name: "Keiji Mutoh",
      nationality: "Japanese"
   }, {
      name: "Eddy Guerrero",
      nationality: "American"
   }, {
      name: "Owen Hart",
      nationality: "Canadian"
   }
];
function canadianWrestlers (arr){
   var bucket = [];
   arr.forEach(function (element){
   if (element.nationality === "Canadian"){
      bucket.push(element);
   }
   });
      return bucket;
}
console.log(canadianWrestlers(wrestlers));

//find the area of
// the circle and round it to the nearest
// whole number using the math object

// var circle = {
//    radius: 36
// }
// var area = Math.round(Math.PI (Math.pow(circle.radius, 2)));
// console.log(area);
//create a function that will return the largest quantity
//from the given array
var groceries = [
   {
      name: "carrots",
      quantity: 5
   },{
      name: "yams",
      quantity: 50
   },{
      name: "oranges",
      quantity: 9
   },{
      name: "onions",
      quantity: 2
   },{
      name: "cucumbers",
      quantity: 6
   },{
      name: "potatoes",
      quantity: 8
   }
];
// function highestQuantity(arr){
//    return arr;
// }

var products = [
   {
      name: 'Playstation 5',
      price: 599.99
   }, {
      name: 'Logitech Wireless Mouse',
      price: 23.99
   }, {
      name: 'Macbook Pro',
      price: 1099.99
   }, {
      name: 'GoPro HERO10',
      price: 399.99
   }, {
      name: '12" & 6" Metal Ruler Set',
      price: 5.99
   }]
function sortByName(arr){
   return arr.sort(function(a, b) {
      var aLower = a.name.toLowerCase();
      var bLower = b.name.toLowerCase();

      if(aLower < bLower) {
         return -1;
      } else if(aLower > bLower) {
         return 1;
      }else {
         return 8;
      }
   });
}
console.log(sortByName(products));

// var bBallPlayers = [
//    {
//       name: "Hakeem Olajuwon",
//       height: 213
//    }, {
//       name: "Muggsy Bogues",
//       height: 160
//    }, {
//       name: "Chris Paul",
//       height: 183
//    }, {
//       name: "Bol Bol",
//       height: 218
//    }, {
//       name: "Moochie Norris",
//       height: 185
//    }, {
//       name: "Manu Ginobili",
//       height: 198
//    }
//
// ];
// function lowestHeight(arr){
//
//    // Math.min(bBallPlayers[height[0]])
//    var check = {height: Number.MAX_VALUE};
//    arr.forEach(function (el) {
//       if (el.height < check.height) {
//          check = el;
//       }
//    });
//    return check;
// }
// console.log(check(bBallPlayers))

// function lowest(arr) {
//    var bucket = [];
//    arr.forEach(function(e) {
//
//    });
//    var lowest = Math.mon(bucket);
//    var output;
//    ar.forEach(function(e) {
//       if (e.height === shortest) {
//          output = e;
//       }
//    });
//    return output;
// }
// console.log(lowest(bBallPlayers));



var myCharacter = {
   name: 'Me',
   hitPoints: 100,
   class: 'Warrior',
   abilities: {
      attack: function(obj) {
         console.log([myCharacter.name + "used " + myCharacter.weapon.damage + "against" + "and caused " + "hitPoints" +  "damage"])
      },
   },
   magicPoints: 0,
   weapon: {
      name: 'Silver Sabre',
      damage: 16,
      type: 'sword'
   }
}

var enemy = {
   name: 'Savage Orc',
   hitPoints: 100,
   class: 'Warrior',
   magicPoints: 0,
}



console.log(["name" + "used " + "weapon" + "and caused " + "hitPoints" +  "damage"])
enemy.sort

function randomRPS(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}
const array = ['rock', 'paper', 'scissors'];
const result = randomRPS(array);
console.log(result)
