// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to summarize a sandwich order
function order_sandwich(...items: string[]): void {
  console.log('Sandwich Order Summary:');
  if (items.length > 0) {
    console.log(`You ordered a sandwich with: ${items.join(', ')}`);
  } else {
    console.log('You ordered an empty sandwich. Please add some items!');
  }
  console.log('--------------------------');
}

// Call the function three times with a different number of arguments each time
order_sandwich('Ham', 'Cheese', 'Lettuce');
order_sandwich('Turkey', 'Tomato');
order_sandwich(); // Empty sandwich
