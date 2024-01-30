// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// List of current usernames
let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'David'];

// List of new usernames
let new_users: string[] = ['Alice', 'Eric', 'Bob', 'Megan', 'Frank'];

// Loop through new_users to check for uniqueness
for (let new_username of new_users) {
  // Check case-insensitively if the new username is in the current_users list
  let usernameExists = current_users.some(
    (existing_username) =>
      existing_username.toLowerCase() === new_username.toLowerCase()
  );

  // Print appropriate message based on the result
  if (usernameExists) {
    console.log(
      `Sorry, the username '${new_username}' is already taken. Please enter a new username.`
    );
  } else {
    console.log(
      `Congratulations! The username '${new_username}' is available.`
    );
  }
}
