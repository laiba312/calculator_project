// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array of programming languages
let programmingLanguages: string[] = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'C++',
  'Ruby',
  'Swift',
];

// Print the list of programming languages
console.log('List of Programming Languages:');
programmingLanguages.forEach((language, index) => {
  console.log(`${index + 1}. ${language}`);
});
