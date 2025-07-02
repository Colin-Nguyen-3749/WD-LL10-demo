/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `${username}: ${comment}`;

  if (addToStart === true) {
    // If addToStart is true, add the comment to the start of the comments array
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const modalBody = document.getElementById("winnerModalBody");
  // Set the winner message (use template literals for HTML)
  modalBody.innerHTML = message;

  // Show the Bootstrap modal
  const winnerModal = new bootstrap.Modal(
    document.getElementById("winnerModal")
  );
  winnerModal.show();
  showRandomEmoji();
}
/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winnerComment = comments[randomIndex];
  const message = `🎉 The winner is: <strong>${winnerComment}</strong> 🎉`;
  showWinnerMessage(message);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("winner-emoji").innerText = emoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  comments.splice(index, 1);
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Complete the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */

// Get the button that submits the comment (assuming it has id 'submit-comment')
const submitButton = document.getElementById("submit-comment");

// Add an event listener to the button
if (submitButton) {
  submitButton.addEventListener("click", function () {
    // Get the username from the input
    const usernameInput = document.getElementById("new-username");
    // Get the comment from the input
    const commentInput = document.getElementById("new-comment");
    // Get the checkbox value (checked or not)
    const addToStartCheckbox = document.getElementById("add-to-Start");

    // Get the values from the inputs
    const username = usernameInput ? usernameInput.value : "";
    const comment = commentInput ? commentInput.value : "";
    const addToStart = addToStartCheckbox ? addToStartCheckbox.checked : false;

    // Call the addComment function with the values
    addComment(username, comment, addToStart);
  });
}
