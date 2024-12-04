// Prompting the user to enter three numbers separated by a single space
process.stdout.write("Please enter 3 numbers separated by a single space: ");

// Listening for user input
process.stdin.on("data", function (inputFromUser) {
  // Convert input to a string, remove extra spaces, and split the numbers into an array
  let numInString = inputFromUser.toString().trim().split(" ");

  // Convert the split strings into numbers
  let num1 = Number(numInString[0]);
  let num2 = Number(numInString[1]);
  let num3 = Number(numInString[2]);

  // Check if all three numbers are equal, but not equal to 2
  if (num1 == num2 && num2 == num3 && num1 != 2 && num2 != 2 && num3 != 2) {
    process.stdout.write("You entered three matching numbers\n");
  }
  // Check if all three numbers are different, but not equal to 2
  else if (
    num1 != num2 &&
    num2 != num3 &&
    num1 != num3 &&
    num1 != 2 &&
    num2 != 2 &&
    num3 != 2
  ) {
    process.stdout.write("You entered three different numbers\n");
  }
  // Check if the first two numbers are the same, but the third is different
  else if (
    num1 == num2 &&
    num2 != num3 &&
    num1 != num3 &&
    num1 != 2 &&
    num2 != 2 &&
    num3 != 2
  ) {
    process.stdout.write("Third one doesn’t fit\n");
  }
  // If any of the numbers is 2, output "You entered the magic number 2!"
  if (num1 == 2 || num2 == 2 || num3 == 2) {
    process.stdout.write("You entered the magic number 2!\n");
  }

  // End the program after displaying the result
  process.exit();
});
