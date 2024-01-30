// User
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
// print a message indicating the number of people you are inviting to dinner. in typescript
let guestList: string[] = ['Aroosa', 'laiba', 'sana'];

// Print invitation messages
guestList.forEach((guest) => {
  console.log(
    `Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have you join us.\n`
  );
});

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
