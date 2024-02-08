const inquirer = require('inquirer'); // Corrected import statement

// Interface for user input
interface Input {
  num1: number;
  operator: string;
  num2: number;
}

// Function to perform calculation based on operator
function calculate(input: Input): number {
  switch (input.operator) {
    case '+':
      return input.num1 + input.num2;
    case '-':
      return input.num1 - input.num2;
    case '*':
      return input.num1 * input.num2;
    case '/':
      if (input.num2 === 0) {
        throw new Error('Division by zero');
      }
      return input.num1 / input.num2;
    default:
      throw new Error('Invalid operator');
  }
}

// Main function
async function main() {
  try {
    // Ask for user input

    const { num1, operator, num2 } = await inquirer.prompt([
      {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number:',
      },
      {
        type: 'list',
        name: 'operator',
        message: 'Select an operator:',
        choices: ['+', '-', '*', '/'],
      },
      {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number:',
      },
    ]);

    // Perform calculation
    const result = calculate({ num1, operator, num2 });

    // Display result
    console.log('The answer is:', result);
  } catch (error) {
    console.error(error.message);
  }
}

main();
