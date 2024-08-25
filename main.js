function printOutput(questionNumber, content) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<div class="display"> <span>${questionNumber}  ${content}</span> </div>`;
}

// 1. Print numbers from 1 to 10
printOutput(1, ". Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  printOutput("", i);
}

// 2. Print the odd numbers less than 100
printOutput(2, ". Odd numbers less than 100:");
for (let i = 1; i < 100; i += 2) {
  printOutput("", i);
}

// 3. Print the multiplication table with 7
printOutput(3, ". Multiplication table with 7:");
for (let i = 1; i <= 10; i++) {
  printOutput("", `7 x ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
printOutput(4, "All multiplication tables with numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    printOutput("", `${i} x ${j} = ${i * j}`);
  }
}

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
printOutput(5, `Sum: ${sum}`);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
printOutput(6, `10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
sum = 0;
for (let i = 12; i < 30; i += 2) {
  sum += i;
}
printOutput(7, `Sum of even numbers between 10 and 30: ${sum}`);

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
printOutput(8, `0°C to Fahrenheit: ${celsiusToFahrenheit(0)}`);

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
printOutput(9, `32°F to Celsius: ${fahrenheitToCelsius(32)}`);

// 10. Calculate the sum of numbers in an array of numbers
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
printOutput(10, `Sum of array [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`);

// 11. Calculate the average of the numbers in an array of numbers
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}
printOutput(
  11,
  `Average of array [1, 2, 3, 4, 5]: ${averageArray([1, 2, 3, 4, 5])}`
);

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function getPositiveNumbers(arr) {
  return arr.filter((num) => num > 0);
}
printOutput(
  12,
  `Positive numbers in [-3, -2, 0, 1, 2, 3]: ${getPositiveNumbers([
    -3, -2, 0, 1, 2, 3,
  ])}`
);

// 13. Find the maximum number in an array of numbers
function maxNumber(arr) {
  return Math.max(...arr);
}
printOutput(13, `Max number in [1, 2, 3, 4, 5]: ${maxNumber([1, 2, 3, 4, 5])}`);

// 14. Print the first 10 Fibonacci numbers without recursion
let fib = [0, 1];
printOutput(14, "First 10 Fibonacci numbers:");
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
fib.forEach((num) => printOutput("", num));

// 15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
printOutput(15, `10th Fibonacci number: ${fibonacci(10)}`);

// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
printOutput(16, `Is 7 prime? ${isPrime(7)}`);

// 17. Calculate the sum of digits of a positive integer number
function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}
printOutput(17, `Sum of digits of 1234: ${sumOfDigits(1234)}`);

// 18. Print the first 100 prime numbers
let primes = [];
for (let i = 2; primes.length < 100; i++) {
  if (isPrime(i)) primes.push(i);
}
printOutput(18, `First 100 prime numbers: ${primes}`);

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function primeNumbersGreaterThan(n, p) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}
printOutput(
  19,
  `First 5 prime numbers greater than 10: ${primeNumbersGreaterThan(10, 5)}`
);

// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}
printOutput(
  20,
  `Array [1, 2, 3, 4, 5] rotated left: ${rotateLeft([1, 2, 3, 4, 5])}`
);

// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
  let last = arr.pop();
  arr.unshift(last);
  return arr;
}
printOutput(
  21,
  `Array [1, 2, 3, 4, 5] rotated right: ${rotateRight([1, 2, 3, 4, 5])}`
);

// 22. Reverse an array
function reverseArray(arr) {
  return arr.reverse();
}
printOutput(
  22,
  `Array [1, 2, 3, 4, 5] reversed: ${reverseArray([1, 2, 3, 4, 5])}`
);

// 23. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
printOutput(23, `String "hello" reversed: ${reverseString("hello")}`);

// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
printOutput(
  24,
  `Merged arrays [1, 2, 3] and [4, 5, 6]: ${mergeArrays([1, 2, 3], [4, 5, 6])}`
);

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function symmetricDifference(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}
printOutput(
  25,
  `Symmetric difference of [1, 2, 3] and [2, 3, 4]: ${symmetricDifference(
    [1, 2, 3],
    [2, 3, 4]
  )}`
);

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function difference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
printOutput(
  26,
  `Difference of [1, 2, 3] minus [2, 3, 4]: ${difference([1, 2, 3], [2, 3, 4])}`
);
