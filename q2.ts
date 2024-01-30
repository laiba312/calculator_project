import { Console, log } from 'console';
let prompt1 = require('prompt-sync')();
/*Name Cases: Store a person’s name in a variable, and then print 
    that person’s name in lowercase, uppercase, and titlecase.
 */

let name_l_up: string = prompt1('person name :');

console.log(`${name_l_up.toUpperCase()} is upper case, `);
console.log(`${name_l_up.toLowerCase()} is lower case,`);
console.log(toTitleCase(name_l_up)); // titlecase

// Helper function to convert a string to titlecase
function toTitleCase(nom: string): string {
  return nom.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
