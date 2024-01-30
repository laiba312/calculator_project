// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Function to show magicians
function show_magicians1(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
  // Create a new array with modified names
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }

  return greatMagicians;
}

// Array of magician's names
let magicianNames1: string[] = ['David ', 'laiba', 'fatima', 'meryam'];

// Call make_great to modify the array
let greatMagicians: string[] = make_great(magicianNames1);

// Call show_magicians to see the modified list
console.log('Original Magicians:');
show_magicians1(magicianNames1);

console.log('\nGreat Magicians:');
show_magicians1(greatMagicians);
