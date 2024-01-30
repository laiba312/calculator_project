// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Modified function to make a shirt with defaults
function make_shirt1(
  size: string = 'large',
  message: string = 'I love TypeScript'
): void {
  console.log(
    `A ${size.toUpperCase()} shirt will be printed with the message: "${message}"`
  );
}

// Create a large shirt with the default message
make_shirt1();

// Create a medium shirt with the default message
make_shirt1('medium');

// Create a small shirt with a different message
make_shirt1('small', 'JavaScript is fun!');
