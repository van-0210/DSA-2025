// JavaScript Array Method Tasks //

// /1. Basic Array Methods ///

// 1. Create an array of 5 fruits

// fruits = ["Bananana" , 'Apple', 'Kiwi','Cheery' , "Watermelon"]
// console.log(fruits);

// 2. Add 'Mango' to the end of the array.
// 3. Add 'Strawberry' to the beginning.
// 4. Remove the last element.
// 5. Remove the first element.
// 6. Check if 'Apple' is in the array.
// 7. Find the index of 'Banana'.
// 8. Replace the second element with 'Peach'.
// 9. Get the length of the array.
// 10. Convert the array to a string.


// fruits = ["Banana" , 'Apple', 'Kiwi','Cheery' , "Watermelon"]
// fruits.push("Mango");
// fruits.unshift("Strawberry");
// fruits.pop();
// fruits.shift();
// console.log(fruits.includes('Apple'));
// console.log(fruits.indexOf('Banana'));
// fruits.splice (1 ,1, "Peach")
// console.log(fruits.length);
// b = fruits.toString();
// console.log(b);
// console.log(fruits);




// // map() Method //


// // 1. Double all numbers in an array.
// // let a = [4, 9, 16, 25];
// // function double(a) {
    
// //     return a * 2;
// // }
// // let s = a.map(double);
// // console.log(s);

// // 2. Convert an array of strings to uppercase.
// // fruits = ["Bananana" , 'Apple', 'Kiwi','Cheery' , "Watermelon"]
// // let fruitsUpper = fruits.map(function(item) {
// //   return item.toUpperCase();
// // });

// // console.log(fruitsUpper);
// // console.log(fruits);

// // 3. Add 5 to each number in an array.
// // a = [22, 34, 53 , 567 ,35]
// // let s = a.map(add)
// // function add(num) {
// //     return num + 5
// // }
// // console.log(s);

// // 4. Convert prices to prices with 10% tax.
// // prices =[130 , 244, 500 ,1099]
// // let s = prices.map(tax)
// // function tax(num) {
// //     return num + (num * 0.1)
    
// // }
// // console.log(s);

// // 5. Get length of each string in array.
// // fruits = ["Banana" , 'Apple', 'Kiwi','Cheery' , "Watermelon"]
// // let s = fruits.map(length)
// // function length(str) {
// //     return str.length
    
// // }
// // console.log(s);

// // 6. Square each number in the array.
// // a = [ 2, 4 , 5, 7, 13]
// // let s = a.map(sq)
// // function sq(num) {
// //     return num * num
// // }
// // console.log(s);

// // 7. Convert objects to array of names.
// // let objects = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
// // let names = objects.map(obj => obj.name);
// // console.log(names);

// // 8. Append '!' to each string.
// // let str = ['Hello','Vanshi']
// // let s = str.map(item => item + '!');
// // console.log(s);

// // 9. Convert numbers to strings.
// // n =[134 , 2434, 976, 65, 424, 646]
// // let s = n.map(String);
// // console.log(s);

// // 10. Round floats to nearest integers.
// // let f = [ 2.5544 ,45.532345 ,23.5653 , 3456.4566543 ,456.1345]
// // let r = f.map(Math.round);
// // console.log(r);


// // filter() Method //

// // 1. Filter out numbers less than 10.
// // a = [12 ,3,45, 6,78,2,19,9 ,34,20]
// // let s = a.filter((num) => num > 10)
// // console.log(s);

// // 2. Filter even numbers.
// // a = [12 ,3,45, 6,78,2,19,9 ,34,20]
// // let s = a.filter((num)=> (num%2 == 0))
// // console.log(s);

// // 3. Filter strings longer than 5 characters.
// // a = ["you're", , 'my', 'Favourite']
// // let s = a.filter((str) => (str.length <= 5))
// // console.log(s);

// // 4. Filter users with age > 18.
// // age =[23,18 ,14, 17, 16 , 35, 45, 21]
// // let s = age.filter((age) => age>18 )
// // console.log(s);

// // 5. Filter non-empty strings.
// // a = ["","Vanshi","","Shah",""]
// // let s = a.filter(str => str !== "");
// // console.log(s);

// // 6. Filter truthy values from array.
// // let a = [0, 1, "", "hello", null, "world", undefined, NaN, 42, !false];
// // let tv = a.filter(Boolean);
// // console.log(tv);

// // 7. Filter names starting with 'A'.
// // a =['Arnav', 'Arnoald','Rudra','Vanshi','Arvi','Arya','Alex']
// // s = a.filter(asa => asa.startsWith("A"))
// // console.log(s);

// // 8. Filter out null and undefined.
// // a = [0, 1, "", "hello", null, "world", undefined, NaN, 42, !false];
// // tv = a.filter(item => item !== null && item !== undefined);
// // console.log(tv);

// // 9. Filter products with price > 100.
// // price = [230, 78 , 34,234,100, 104, 34, 323]
// // s = price.filter(price => price >100);
// // console.log(s);

// // 10. Filter students who passed.
// marks = [89, 54, 76, 23 , 32, 45 , 36, 45]
// s = marks.filter(marks => marks >= 37);
// console.log(s);

// forEach() Method
// 1. Print each element in array.
// 2. Print index and value.
// 3. Add each number to total.
// 4. Capitalize and print each string.
// 5. Log each item with message.
// 6. Add property to each object.
// 7. Convert strings to kebab-case.
// 8. Push even numbers to new array.
// 9. Create summary string from items.
// 10. Log items with 1-based index.
