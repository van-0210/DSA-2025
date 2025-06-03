// 1. Create a function that returns the square of a number.
function square(n) {
    return n * n;
}
console.log(square(4));
console.log(square(5));
console.log(square(3));
console.log(square(23));
console.log(square(56));

// 2. Write a function that checks if a number is even or odd.
function number(m) {
    if (m%2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(number(23234));
console.log(number(242));
console.log(number(26));
console.log(number(243));
console.log(number(25));

// 3. Build a function to calculate the factorial of a number.
function fact(n) {
    let no = 1;
    for (let i = 1; i <= n; i++) {
        no *= i;
    }
    return no;
}
console.log(fact(7));
console.log(fact(5));
console.log(fact(3));
console.log(fact(6));
console.log(fact(2));
console.log(fact(8));

// 4. Create a greeting function that returns "Good morning, <name>".
function greet(name) {
    return "Good Morning "+ name +" !";
    
}
console.log(greet("Vanshi"));
console.log(greet("Rudra"));
console.log(greet("Jiya"));
console.log(greet("Nidhi"));
console.log(greet("Sihan"));
console.log(greet("Khelan"));

// 5. Convert a normal function into an arrow function.

let sq = n => n * n
console.log(sq(10));



// tasks //


// 1. Create a function to add two numbers
function add(a, b) {
 return a + b;
}
console.log(add(5, 3));

// 2. Function to check if a number is even or odd
function isEven(n) {
 return n % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(67));

// 3. Function to find the square of a number
function square(n) {
 return n * n;
}
console.log(square(77));

// 4.  Function to return the larger of two numbers
function max(a, b) {
 return a > b ? a : b;
}
console.log(max(23, 45));

// 5. Create a function to greet with name
function greet(name) {
 console.log(`Hello, ${name}`);
}
console.log(greet("Vanshi"));

// 6. Function to convert Celsius to Fahrenheit
function toFahrenheit(c) {
 return (c * 9) / 5 + 32;
}
console.log(toFahrenheit(45));

// 7. Function with default parameters
function welcome(name = "Guest") {
 return `Welcome, ${name}`;
}
console.log(welcome);

// 8. Function to check if string is a palindrome
function isPalindrome(str) {
 return str === str.split("").reverse().join("");
}
console.log(isPalindrome("rude"));

// 9.  Find sum of array elements using function
function sumArray(arr) {
 let sum = 0;
 for (let num of arr) sum += num;
 return sum;
}
console.log(sumArray([10 , 23, 45, 34, 45, 38]));

// 10. 
