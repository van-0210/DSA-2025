// loop tasks
// 1. Print numbers 1 to 10 using for loop.
 
for (let i = 1; i <= 10; i++){
    console.log(i);
    
}

// 2. Print even numbers from 1 to 20 using a while loop.
let i1 = 0
while (i1 < 21){
    i1+=2 ;
  console.log(i1)
}

// 3. Write a do...while loop that runs at least once even if the condition is false
let i2 = 1;
do {
 console.log("Do While Count: " + i2);
 i2++;
} while (i2 <= 0);


// 4. Create a loop that breaks when a number is divisible by both 3 and 5.
for (i3 = 0; i3 <= 25; i3+=3){
    if (i3%3 === 0 && i3%5 ===0){
        break;
    }
    console.log(i3);
    
}

// 5. Use continue to skip printing number 7 from 1 to 10
for (let i = 1; i <= 10; i++){
    if(i == 7){
        continue;
    }
    console.log(i);
    
}
