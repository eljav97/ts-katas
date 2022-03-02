// function fizzbuzz

// 	  for number n from 1 to 100

// 		    set print_number to true

// 		    if n is divisible by 3 then
// 			      print "Fizz"
// 			      set print_number to false

// 		    if n is divisible by 5 then
// 			      print "Buzz"
// 			      set print_number to false

// 		    if print_number then
// 						print n

// 		    print a newline

function fizzBuzz(numbers: Array<number>): Array<number> {
  const fizzBuzzArray = [];
  for (const n of numbers) {
    fizzBuzzArray.push(isFizzBuzz(n));
  }

  return fizzBuzzArray;
}

function isFizzBuzz(n: any) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzBuzz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else {
    return n;
  }
}

export default fizzBuzz;
