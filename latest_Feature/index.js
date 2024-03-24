// console.log('hello world Latest Feature')

// Optional chaining
// Optional chaining allows reading the value of a property located deep within a chain of connected object without having to check each reference in the chain

// const user = {
//   name: 'Alice',
//   address: {
//     city: 'Wonderland'
//   },
//   // greet: function () {
//   //   return 'hello mama'
//   // }
// }

// // Traditional way : Check each property in the chain
// const city = user && user.address && user.address.city
// console.log('city ta ki ', city)

// // With Optional Chaining 
// const optCity = user?.address?.city
// console.log('city ta ki ', optCity)

// // we can use it for method als

// const method = user.greet?.()
// console.log('user method ta ki ', method)


// 2. Nullish coalescing 
// The nullish coalescing operator(??) is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined, and otherwise returns it's left-hand operand.

//This is a way to handle default values more predictably than using OR(||) operator . The or operator have some problem if we get any false value(eg. false , O) then we get default value. remember false is a value here . so we still have get value but it's give me default value 
// false || 'anonymous' => here OR(||) operator igone our falsy value

// false ?? 'anonymous' => Here Nullish coalescing operator doesn't ignore falsy value 


//3. Numeric separators
//Numeric seperator enhance readability by allowing underscores (_) to be inserted between digits in numeric literals

//Long numeric values can be hard to parse at a glance
// const withoutSeparator = 1000000000;

//using the numeric separator for better readability
//const withSeparator = 1_000_000_000;
//console.log(withSeparator) //1000000000

//4. array.at() Method 
// The array.at() method in JavaScript is used to retrieve an element from an array at a specific index. It offers a more readable and safer alternative to traditional bracket notation (array[]) for accessing elements, especially when dealing with negative indices.

// const fruits = ["apple", "banana", "orange"];

// Accessing first element
// console.log(fruits.at(0)); // Output: "apple"

// Accessing last element
// console.log(fruits.at(-1)); // Output: "orange"

// Accessing element at index 2
// console.log(fruits.at(2)); // Output: "orange"

// Out-of-bounds index
// console.log(fruits.at(4)); // Output: undefined


//5. array.replaceAll()
// The replaceAll() method searches a string for a value or a regular expression. The replaceAll() method returns a new string with all values replaced.
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"


//use of logical OR(||) operator

// const todo = {
//   name:'',
//   age: 3
// }
// todo.name ||= 'tor kono nam nai';
// todo.name || (todo.name = 'zero');
// console.log(todo)

// let num = 20;
// num &&=50;
// 50
// num
// 50
// num=null
// null
// num &&=59
// null
// num
// null
// num = true
// true
// num &&=4
// 4
// num = ''
// ''
// num &&='joybangla'
// ''


// so Nullish coalescing operator adejectly ignore null or undifined value 

// Logical OR(||) operator ignore all falsy value 


// Promise.any()
//takes an array of promises . and wait to first reslove promis. 
//if all promises are rejected then we get aggregated error
