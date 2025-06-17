// 1. Create a basic stack using array

// stack = [323,564, 536,747]
// class Stack {
//   constructor() {
//     this.items = [];
//   }
  
//   push(element) {
//     this.items.push(element);
//   }
  
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }
  
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }
  
//   isEmpty() {
//     return this.items.length === 0;
//   }
  
//   size() {
//     return this.items.length;
//   }
  
//   print() {
//     console.log(this.items);
//   }
// }
// Stack.push(234);
// Stack.pop();
// Stack.peek();
// Stack.print()


// 2. Create Stack class with push(), pop(), peek()

// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     // if (this.items.isEmpty()) {
//     console.log(this.items.length);

//     if (this.items.length == 0) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items);
//   }
// }

// let newStack = new Stack();
// newStack.push(34);
// newStack.push(23);
// newStack.print();
// newStack.peek();
// newStack.size();
// newStack.pop();
// newStack.print();
// newStack.size();
// newStack.push(45);
// newStack.pop();
// newStack.pop();
// newStack.isEmpty();
// newStack.print();

// 4. Print all elements using printStack()

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     printStack() {
//         console.log(this.items);
//     }

// push(element) {
//     this.items.push(element);
// }
// pop() {
//     if (this.isEmpty()) {
//         return "Stack is empty";
//     }
//     return this.items.pop();
// }
// peek() {
//     if (this.isEmpty()) {
//         return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
// }
// isEmpty() {
//     return this.items.length === 0;
// }
// size() {
//     return this.items.length;
// }
// print() {
//     console.log(this.items);
// }
// }

// let newStack = new Stack();
// newStack.push(34);
// newStack.push(23);
// newStack.print();
// newStack.peek();
// newStack.size();
// newStack.pop();
// newStack.print();
// newStack.size();
// newStack.push(45);
// newStack.pop();
// newStack.pop();
// newStack.isEmpty();
// newStack.print();

// newStack.printStack(); 

//5. Reverse a string using stack
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items);
//     }
// }

// function reverseString(str) {
//     let stack = new Stack();
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reversed = "";
//     while (!stack.isEmpty()) {
//         reversed += stack.pop();
//     }
//     return reversed;
// }

// console.log(reverseString("Hello World")); 
// console.log(reverseString("Rudra")); 
// console.log(reverseString("Vandan")); 
// console.log(reverseString("Yuvraj")); 
// console.log(reverseString("Akshat")); 


// 6. Find palindrome using stack.
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items);
//     }
// }

// function reverseString(str) {
//     let stack = new Stack();
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reversed = "";
//     while (!stack.isEmpty()) {
//         reversed += stack.pop();
//     }
//     return reversed;
   
// } 

// isPalindrome = (str) => {
//     let reversed = reverseString(str);
//     return str === reversed;
// };  
// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 

// 7. Match opening/closing brackets using stack
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items);
//     }
// }
// function isBalanced(expression) {
//     let stack = new Stack();
//     const brackets = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let char of expression) {
//         if (brackets[char]) {
//             stack.push(char);
//         } else if (Object.values(brackets).includes(char)) {
//             if (stack.isEmpty() || brackets[stack.pop()] !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.isEmpty();
// }
// console.log(isBalanced("()")); 
// console.log(isBalanced("({})")); 
// console.log(isBalanced("({[})")); 

// 8. Stack underflow condition
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "underflow";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items);
//     }
// }
// let newStack = new Stack();
// newStack.push(34); 
// newStack.push(23);
// newStack.print();
// newStack.peek();
// newStack.size();   
// newStack.pop();
// newStack.pop();
// newStack.print();
// console.log("Peek:", newStack.peek());   
// console.log("Size:", newStack.size());    

// console.log("Pop:", newStack.pop());    
