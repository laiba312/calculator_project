// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

// Function to describe a city and its country
function describe_city1(city: string, country: string = 'Unknown'): void {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city1('Karachi', 'Pakistan');
describe_city1('New York', 'USA');
describe_city1('Tokyo'); // This will use the default country ("Unknown")
