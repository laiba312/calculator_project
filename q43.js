"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to show magicians
function show_magicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to make magicians great without modifying the original array
function make_great2(originalMagicians) {
    // Create a new array with modified names
    let greatMagicians = [];
    for (let magician of originalMagicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
// Array of magician's names
let magicianNames2 = ['David ', 'laiba', 'fatima', 'meryam'];
// Call make_great with a copy of the array to create a new array with modified names
let greatMagicians2 = make_great2([...magicianNames2]); // Using the spread operator to create a copy
// Call show_magicians to show the original list
console.log('Original Magicians:');
show_magicians2(magicianNames2);
// Call show_magicians to show the list with the Great added to each magician's name
console.log('\nGreat Magicians:');
show_magicians2(greatMagicians2);
