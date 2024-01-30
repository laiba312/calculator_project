// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end
// of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one
// new guest to the end of your list. • Print a new set of invitation messages,
//  one for each person in your list.
let guest_list3: string[] = ['zaheer', 'aroosa', 'laiba', 'fatima'];
guest_list3.splice(0, 1);
guest_list3.splice(1, 0, 'meryam');
guest_list3.forEach((gust) => {
  console.log(`people that you found a bigger dinner table. ${gust}`);
});
// • Add one new guest to the beginning of your array.
guest_list3.splice(0, 0, 'noor');
console.log(guest_list3);
//• Add one new guest to the middle of your array. • Use append() to add one
// new guest to the end of your list. • Print a new set of invitation messages,
//  one for each person in your list.
console.log(guest_list3.length);
guest_list3.splice(3, 0, 'sara');
console.log(guest_list3);
guest_list3.splice(7, 0, 'ali');
console.log(guest_list3);
guest_list3.forEach((gust) => {
  console.log(`hello found a bigger dinner table. ${gust}`);
});
