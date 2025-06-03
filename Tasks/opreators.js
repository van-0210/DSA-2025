//  *1* Arithmetic Operataros //


// 1. Add two numbers using + and display the result.
let no1 = 28;
let no2 = 43;
let result = no1 + no2;
console.log(`The addition is ${result}`) ;

// 2. Subtract two numbers using -
let no = 178;
let num = 120;
let sub = no - num ;
console.log(`The subtraction is ${sub}`);

// 3.  Multiply two variables using *
let n = 16
let m = 56
let mul = n * m
console.log(`The multi is ${mul} `);

// 4. Divide two values using /.Divide two values using /.
let a = 25
let b = 12
let div = a/b
console.log(`The division is ${div}`);

// 5.  Find the remainder using %.
let c = 75
let d = 34
let rem = c%d
console.log(`The remainder is ${rem}`);

// 6.  Increment a number using ++.
let f = 34;
f ++;
console.log("Increasing no.: " + f);

// 7. Decrement a number using --.
let g = 45;
g--;
console.log(`Decreasing no. : `+ g);

// 8. Chain multiple arithmetic operations with brackets
let ans = (((3+45)*(87 - 34)/ 54)** 3);
console.log(ans);

// 9. Combine arithmetic with user input
let input = process.argv[2]
let input2 = process.argv[3]
output = ((input+input2)**2);
console.log(output);

// 10. Calculate area and perimeter of a rectangle using operators.
let len = 67
let br = 58
let perimeter = 2*(len + br);
console.log(perimeter);
let area = (len*br)
console.log(area);



// *2* Assignment Operators //


// 1. Assign a value to a variable with =.
const vari = "Hello"
console.log(vari);

// 2. Increase a value by 10 using +=.
let val = 35
val += 12;
console.log(val);

// 3. Reduce a value using -=.
let val1 = 77
val1 -= 43
console.log(val1);

// 4. Multiply and reassign using *=
let val2 = 366
val2 *= 7
console.log(val2);

// 5. Divide and reassign using /=.
let val3 = 735
val3 /= 23
console.log(val3);

// 6. Use modulus assignment %=.
let val4 = 65
val4 %= 3
console.log(val4);

// 7. Use exponentiation assignment **=
let val5 = 12
val5 **= 4
console.log(val5);
 
// 8. Chain multiple assignment operators.
let val6 = 14
val6 -=  54
val6 += 56
val6 **= 2
console.log(val6);

// 9. Display results at each step to observe the changes.
let val7 = 14
val7 -=  54
console.log(val7);
val7 += 56
console.log(val7);
val7 **= 2
console.log(val7);

// 10. done



// *3* Comparison Operators Tasks //

// 1. Compare two numbers using == and ===.
45 == 34;
400 ==="400"

// 2. Compare a string and a number using ==.
4 =='4'

// 3. Use !== to check strict inequality.
566 !== 456

// 4. Use > and < between variables
56 > 100
46 < 200

// 5. Create a grading system using >=, <=.
let marks = 45
if (marks >= 35 && marks <= 100){
    console.log(`Pass`);
}
else {
    console.log(`Fail`);    
}

// 6. Compare strings (e.g., "apple" > "banana").
let a1 = "apple" 
let b1 = "banana"
console.log(a1 > b1);

// 7. Use comparisons in an if-else condition.
let h = 90
if (h=> 40) {
    console.log(`Achieved`);
    
} else {
    console.log(`Try Again`);
}

// 8. Compare dates using comparison operators.
let dates = '15-09-2007'
let date = '02-10-2007'
console.log(dates>=date);

// 9. Use comparison inside a loop (e.g., i < 5).

// 10. Create a login check (username === "admin")



// 4. Logical Operators Tasks //

// 1. Use && to check if age is between 18 and 60.
let age = process.argv[2]

if (age>= 18 && age <= 60) {
    console.log("Valid");
} else {
    console.log("Invalid");    
}

// 2. Use || to check if user is admin or manager.
let user = process.argv[2]
if (user = 'admin' ||  'manager') {
    console.log(process.argv[2]);    
} else {
    console.log("Invalid");
}

// 3. Use ! to invert a boolean.
a = true
a = !true
console.log(a);

// 4. Combine logical operators in a complex condition.
let name = "Rudra"
let age1 = 17
if (age1 >= 16 && age1 <= 20) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
} 

// 6. Validate multiple form fields.

// 7. Use ! with falsy values (!0, !null, etc.).


// 6. String Operators //

// 1. Concatenate two strings using +.
let c3 = "!!"
let c4 = "Hello"
console.log(c3+c4);

// 2. Append strings using +=.
let b3 = 14
b3 += 23
console.log(b3);

// 3. Combine strings and numbers.
let s = '34'
let no3 = 23
console.log(s+no3);

// 4. Use template literals instead of +.
let d3 ="R"
let d4 ="u"
let d5 ="d"
let d6 ="e"
console.log(`Word: ${d3}${d4}${d5}${d6}`);

// 5. Concatenate multiple values in a single line
let t = "yhyks"
let j = "uwih"
let k = "fjiu"
console.log(t+j+k);

// 6. Build a sentence from variables.
let i = "I"
let o = "am"
let q = "bored."
console.log(`${i} ${o} ${q}`);

// 7. Show difference between number addition and string concatenation (1 + "2").
console.log(1 + "2");
console.log(1 + 2);

// 8. Create a welcome message using variables.
let ft = "wel"
let rt ="come"
console.log(`${ft}${rt}`);

// 9. Practice using backticks and ${}.
//done
// 10. Convert number to string before concatenation.
let san = 24
let van = string(san)



// 7. Conditional (Ternary) Operator//

// 1. Use ternary to check if a number is even or odd.
let ev = process.argv[2] 
let con = (ev % 2 == 0) ? "Even" : "Odd"
console.log(con);

// 2. Replace a basic if-else with ternary.
let age3 = 17;
let adult = (age3 >=18) ? "You are above or equal to 18." : "You are below 18."
console.log(adult);

// 7. Use ternary for age group: child/adult/senior.
let tage = process.argv[2];
let category = (tage>= 0 && tage <= 17) ? "You are a child" : (tage>= 18 && tage<= 60) ? "You are an Adult" : (tage >= 60 && tage <= 90)?"You are a senior." : "Invalid"
console.log(category);

//done