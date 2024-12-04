// Prompting the user to enter two numbers separated by a space
process.stdout.write(
  "Please enter two numbers separated with a single space:  "
);

// Listening for user input
process.stdin.on("data", function (inputFromUser) {
  // Convert input to a string, remove extra spaces, and split the numbers into an array
  let numInString = inputFromUser.toString().trim().split(" ");

  // Convert the split strings into numbers
  let num1 = Number(numInString[0]);
  let num2 = Number(numInString[1]);

  // Compare the two numbers and output the result
  if (num1 == num2) {
    // If the numbers are equal
    process.stdin.write("The numbers are equal\n");
  } else if (num1 > num2) {
    // If the first number is larger
    process.stdin.write("The largest number is " + num1 + "\n");
  } else {
    // If the second number is larger
    process.stdin.write("The largest number is " + num2 + "\n");
  }

  // End the program after displaying the result
  process.exit();
});
