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

for (var fiz = 1; fiz <= 100; fiz++){
    if(fiz % 3 === 0 && fiz % 5 === 0){
        console.log("FizzBUzz");
    }else if (fiz % 3 === 0){
        console.log("Fizz");
    }else (buzz % 5 === 0)
    {
        console.log("Buzz");
    }else {
        console.log(fiz)
    }
}