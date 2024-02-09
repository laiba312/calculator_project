"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer'); // Corrected import statement
// Function to perform calculation based on operator
function calculate(input) {
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Ask for user input
            const { num1, operator, num2 } = yield inquirer.prompt([
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
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
main();
