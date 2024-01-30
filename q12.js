"use strict";
/*Greetings: Start with the array you used in Exercise 11, but instead
of just printing each person’s name, print a message to them. The text
of each message should be the same, but each message should be personalized
with the person’s name.*/
let name_of_friend = ['sarah', 'ali', 'aroosa', 'laiba'];
for (let index = 0; index < name_of_friend.length; index++) {
    console.log(`hello ${name_of_friend[index]}`);
}
