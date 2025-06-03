// for(ini ; conditiion ; incre/decr){}

// 1. square
for (let i = 1 ; i <= 5 ; i++){
    let row = "*";
    for (let j = 1; j<=5 ; j++){
        row +="*";
        
        
    }
    console.log(row);
}

// 2. left right angled triangle
for (let i = 1 ; i <= 5 ; i++){
    let row = "*";
    for (let j = 2; j<=i ; j++){
        row +="*";
        
        
    }
    console.log(row);
}

// 3. left right angled triangle (6)
for (let i =0 ; i <= 5 ; i++){
    let row = "*";
    for (let j = 1; j<= i ; j++){
        row +="*";
        
        
    }
    console.log(row);
}

// 4. Infinite loop
for (let i =0 ; i <= 5 ; i--){
    let row = "*";
    for (let j = 1; j<= i ; j--){
        row +="*";
    }
    console.log(row);
    break;
}

// 5. hollow square
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 5 - 1 || j === 0 || j === 5 - 1) {
      line += '* ';
    } else {
      line += '  ';
    }
  }
  console.log(line);
}

// 6. undho L (2)
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if (i === 3 || i === 4 || j === 3 || j === 4) {
      line += '* ';
    } else {
      line += '  ';
    }
  }
  console.log(line);
}

// 7. undho L
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if ( i === 4 || j === 4) {
      line += '* ';
    } else {
      line += '  ';
    }
  }
  console.log(line);
}

// 8. reverse L
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if ( i === 0 || j === 4 ) {
      line += '* ';
    } else {
      line += '  ';
    }
  }
  console.log(line);
}

//9. square cutting in 2 to make 2 rectangle.
for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 4 || j === 4 || j === 2 || j === 0) {
      line += '* ';
    } else {
      line += '  ';
    }
  }
  console.log(line);
}

// 10. Reverse right pyramid 
for (let i = 5 ; i >= 1 ; i--){
    let row = "";
    for (let j = 1; j<= i ; j++){
        row +="* ";
        
        
    }
    console.log(row);
}

// 11. square + triangle left reverse 
for (let i = 5 ; i >= 0 ; i--){
    let row = "";
    for (let j = 0; j<= 5 ; j++){
        row +="* ";
    }
    for (let k = 1; k <= i; k++) {
    row += "* ";
  }
    console.log(row);
}

//11. left right pyramid
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += "  "; 
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

// 12. center alinged triangle
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += "  "; 
  }
  for (let k = 1; k <= i; k++) {
    row += "    * ";
  }

  console.log(row);
}

// 13. proper reverse triangle

for (let i = 5; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += " "; 
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }

  console.log(row);
}

// 14. proper triangle

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += " "; 
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }

  console.log(row);
}

// 15. hollow triangle 
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += " "; 
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1 || i === 5) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
