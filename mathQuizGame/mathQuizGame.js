// Generate two random numbers between 0 and 9
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

// Display the math problem to the user
process.stdout.write("Please enter " + num1 + " + " + num2 + " = :");

// Wait for user input
process.stdin.on("data", function (inputFromUser) {
  let sum = Number(inputFromUser); // Convert input to a number
  let ans = num1 + num2; // Calculate the correct answer
  let count = 0; // Initialize the count (this could be extended for multiple questions)

  // Check if the answer is correct or incorrect
  if (sum === ans) {
    process.stdout.write("Correct");
    count++; // Increment if correct (though count is not used beyond this point)
  } else {
    process.stdout.write("Incorrect");
  }

  // End the game after one question
  process.exit();
});
