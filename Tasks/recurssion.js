// 1. Implement the factorial function using recursion and test it with different numbers.

// function factorial(num) {
//     // console.log (num)
//     if (num === 1) {
//         return 1;
//     } else {
//         return num* factorial(num -1)
//     }
// }
// console.log(factorial(6));
// console.log(factorial(10));
// console.log(factorial(16));
// console.log(factorial(45));
// console.log(factorial(87));

// 2. Write a recursive function to calculate the nth Fibonacci number.

function Fibonacci(n) {
    // console.log(n);
    
    if (n === 0) {
        return 0;
    } 
    else if (n === 1) {
        return 1;
    }
    else {
    return Fibonacci(n - 1) + Fibonacci(n-2)   
    }
}

console.log(Fibonacci(81));
