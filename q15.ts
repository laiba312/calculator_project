/*Changing Guest List: You just heard that one of your guests can’t make 
the dinner, so you need to send out a new set of invitations. You’ll have
to think of someone else to invite. */
let guest_list2: string[] = ['zaheer', 'aroosa', 'laiba', 'fatima'];
guest_list2.splice(0, 1);
guest_list2.splice(1, 0, 'meryam');
guest_list2.forEach((gust) => {
  console.log(`hello ${gust}`);
});
