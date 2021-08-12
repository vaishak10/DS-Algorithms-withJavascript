//Implementation to generate fibonacci series upto n numbers.

const fibonacciNumbers = function (n) {
  if (n === 1) {
    return [0];
  } else if (n == 2){
    return [0,1];
  } else {
    let s = fibonacciNumbers(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacciNumbers(5));