// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Tests for equality and inequality with strings
// Tests for equality and inequality with strings
let string1: string = 'hello';
let string2: string = 'world';

console.log('Equality Test:', string1 == string2); // False
console.log('Inequality Test:', string1 != string2); // True

// Tests using the lower case function
let upperCaseString: string = 'HELLO';
let lowerCaseString: string = 'hello';

console.log(
  'Lowercase Equality Test:',
  upperCaseString.toLowerCase() == lowerCaseString
); // True

// Numerical tests
let number1: number = 10;
let number2: number = 5;

console.log('Equality Test:', number1 == number2); // False
console.log('Inequality Test:', number1 != number2); // True
console.log('Greater Than Test:', number1 > number2); // True
console.log('Less Than Test:', number1 < number2); // False
console.log('Greater Than or Equal To Test:', number1 >= number2); // True
console.log('Less Than or Equal To Test:', number1 <= number2); // False

// Tests using "and" and "or" operators
let x: boolean = true;
let y: boolean = false;

console.log('AND Operator Test:', x && y); // False
console.log('OR Operator Test:', x || y); // True

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log('Item in Array Test:', fruits.includes('banana')); // True

// Test whether an item is not in an array
console.log('Item not in Array Test:', !fruits.includes('grape')); // True
