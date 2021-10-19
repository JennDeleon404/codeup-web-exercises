"use strict"

var odd = 0;
while (true){
  if(odd % 2 === 1 && odd > 1 && odd <50){
    break;
  }
  var input = prompt("Enter a odd number between 1 and 50:");
   odd = parseInt(input);
}
function skipUserNumber(b){
  for (var skip = 1; skip <=100; skip++) {
    if (skip === b){
      console.log("I'm skipping you number");
      continue;
    }
    console.log(skip)
  }
}
skipUserNumber(odd);
// Use a loop and a break statement to
// continue prompting
// the user if they enter invalid input.
//Use a loop and the continue statement
//to output all the odd numbers between 1
//and 50,
// except for the number the user entered.

// I didnt finish the work because I was trying to do the practice test assessment.
// When I originally thought I had done it last Thursday, apparently myself and a couple of other
//students had done the wrong one. I was unable to catch up with my work on the weekend
//so I tried to do it last night. I was up until past 1 AM trying to complete the practice assessment
//and also trying to complete this homework. I was also trying to study and look up other resources
// to understand loops, but I just feel that I am very behind and the learning curve is too much
// for me right now to comprehend.