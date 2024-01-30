// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Function to show magicians
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Array of magician's names
let magicianNames: string[] = ['David ', 'meryam', 'laiba', 'fatima'];

// Call the function to print the names of magicians
show_magicians(magicianNames);
