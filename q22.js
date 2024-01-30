"use strict";
// If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Array of programming languages
// Array of programming languages
let programmingLanguages1 = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'Ruby',
    'Swift',
];
// Attempt to access an element at an invalid index
let invalidIndex = 10; // This index is out of bounds
let invalidLanguage = programmingLanguages1[invalidIndex];
// The above line will cause an "IndexError" due to an attempt to access an element at an invalid index
// To handle the error, you can check if the index is within bounds before accessing the element
if (invalidIndex >= 0 && invalidIndex < programmingLanguages1.length) {
    let correctedLanguage = programmingLanguages1[invalidIndex];
    console.log('Corrected Language:', correctedLanguage);
}
else {
    console.log('Invalid index. Please provide a valid index.');
}
