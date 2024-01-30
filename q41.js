"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Function to show magicians
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magicianNames = ['David ', 'meryam', 'laiba', 'fatima'];
// Call the function to print the names of magicians
show_magicians(magicianNames);
