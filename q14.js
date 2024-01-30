"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people
 you’d like to invite to dinner. Then use your list to print a message to
 each person, inviting them to dinner.*/
/*Start with your program from Exercise 14. Add a print statement at the end
 of your program stating the name of the guest who can’t make it.
 Modify your list, replacing the name of the guest who can’t make it with the
 name of the new person you are inviting.
Print a second set of invitation messages, one for each person who is still
in your list.*/
let guest_list = ['zaheer', 'aroosa', 'laiba', 'fatima'];
// Add a print statement at the end
//  of your program stating the name of the guest who can’t make it.
let gust_unattanable = 'aroosa';
console.log(`${gust_unattanable} can't make it`);
guest_list = guest_list.filter((gust) => gust !== gust_unattanable);
guest_list.forEach((gust) => {
    console.log(`hello ${gust}`);
});
// Modify your list, replacing the name of the guest who can’t make it with the
// name of the new person you are inviting.
guest_list.splice(1, 0, 'meryam');
console.log(guest_list);
// Print a second set of invitation messages, one for each person who is still in your list.
guest_list.forEach((gust) => {
    console.log(`hello ${gust}`);
});
