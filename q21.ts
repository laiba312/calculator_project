// They think of something you could store in
// a TypeScript Object. Write a program that creates Objects
//  containing these items.
// Object representing information about a person
let person: {
  name: string;
  age: number;
  city: string;
  occupation: string;
} = {
  name: 'arooa',
  age: 25,
  city: 'lahore',
  occupation: 'Software Engineer',
};

// Print information about the person
console.log('Person Information:');
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`City: ${person.city}`);
console.log(`Occupation: ${person.occupation}`);
