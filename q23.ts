// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car: string = 'subaru';

// Test 1: Is car == 'subaru'? I predict True.
console.log('Test 1:', car == 'subaru');

// Test 2: Is car == 'honda'? I predict False.
console.log('Test 2:', car == 'honda');

// Test 3: Is car !== 'toyota'? I predict True.
console.log('Test 3:', car !== 'toyota');

// Test 4: Is car.length > 5? I predict False.
console.log('Test 4:', car.length > 5);

// Test 5: Is car.charAt(0) === 's'? I predict True.
console.log('Test 5:', car.charAt(0) === 's');

// Test 6: Is car.includes('bar')? I predict True.
console.log('Test 6:', car.includes('bar'));

// Test 7: Is car.toLowerCase() === 'subaru'? I predict True.
console.log('Test 7:', car.toLowerCase() === 'subaru');

// Test 8: Is car.endsWith('ru')? I predict True.
console.log('Test 8:', car.endsWith('ru'));

// Test 9: Is car.length < 3? I predict False.
console.log('Test 9:', car.length < 3);

// Test 10: Is car.charAt(2) !== 'b'? I predict False.
console.log('Test 10:', car.charAt(2) !== 'b');
