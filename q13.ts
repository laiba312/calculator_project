/*
Your Own Array: Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list that stores several examples.
  Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”*/
// Define an array of favorite transportation modes
const favoriteTransport: string[] = [
  'Honda motorcycle',
  'Toyota car',
  'BMW motorcycle',
  'Audi car',
];

// Iterate through the array and print statements
favoriteTransport.forEach((transport) => {
  console.log(`I would like to own a ${transport}.`);
});
