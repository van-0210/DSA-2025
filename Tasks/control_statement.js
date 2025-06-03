// 1. Check if a number is positive, negative, or zero

let a = process.argv[2]
if (a > 0 ) {
    console.log("The no. is positive.");
    
} 
else if (a == 0){
    console.log("The no. is 0.");   
}
else if (a < 0) {
    console.log("The no. is negative.");
}
else{
    console.log("Invalid.");
    
}

// 2.  Find the largest of 3 numbers

let b =  10
let c = 20
let d = 5
 
if (b>c && b>d) {
    console.log("The largest no. is ",b);
    
} else if(c>b && c>d){
    console.log("The largest no. is ",c);
}
 else {
    console.log("The largest no. is",d);
    
}

// 3. Print numbers from 1 to 10
for (let index = 1; index <=10; index++) {
    console.log(index);
}

// 4. Print multiplication table of any number
let num = 17
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

// 5. Basic calculator using switch
let num1 = process.argv[2];
let num2 = process.argv[3];  
let operator = process.argv[4];
switch (operator) {
  case '+':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case '-':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case '*':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case '/':
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
  default:
    console.log('Invalid operator');
}

// 6. Print all even numbers between 1–50
for (let i = 1; i<=50; i++){
 if (i%2 == 0) {
console.log(i);
}
}

// 7. Print each character of a string using for...of loop
let str = "Hello";
for (const element of str) {
    console.log(element);
}

// 8.  Count vowels in a string Maximus"
// • Use: for...of, if, string matching
let inputString = "Maximus";
let vowels = "aeiouAEIOU";
let count = 0;

for (const char of inputString) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(`Number of vowels in "${inputString}": ${count}`);

// 9.  Find factorial of a number
// • Input: 5
// • Output: 120
// • Use: for, accumulator
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Factorial of ${number}: ${factorial}`);

// 10. Reverse a number

