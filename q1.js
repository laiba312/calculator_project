"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prompt1 = require('prompt-sync')();
/*Personal Message: Store a person’s name in a variable,
 and print a message to that person. Your message should be simple, such as,
 “Hello Eric, would you like to learn some Python today?”*/
let name_of_person = prompt1('enter your name: ');
console.log(`Hello ${name_of_person} , would you like to learn some Python today`);
