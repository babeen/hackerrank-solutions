// if both given number is divisible by 3 and 5 print 'FizzBuzz', only 3 print 'Fizz', only 5 print 'Buzz'.
function fizzBuzz(n){
    
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }


}

fizzBuzz(15);