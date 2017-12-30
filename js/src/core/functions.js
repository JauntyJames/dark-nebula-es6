isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

arraySum = (array) => {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

fizzBuzz = (num) => {
  if (num === null){
    return null;
  } else {
    if (num % 3 === 0 && !(num % 5 === 0)){
      return 'fizz';
    } else if (num % 5 === 0 && !(num % 3 === 0)) {
      return 'buzz';
    } else if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    } else {
      return num;
    } 
  }

  // write a function that receives a number as its argument;
  // if the number is divisible by 3, the function should return 'fizz';
  // if the number is divisible by 5, the function should return 'buzz';
  // if the number is divisible by 3 and 5, the function should return
  // 'fizzbuzz';
  //
  // otherwise the function should return the number, or false if no number
  // was provided or the value provided is not a number
};
