// Create an empty array to store user input
let numbers = [];

// Prompt the user to enter a number
process.stdout.write("Please enter a number: ");

// Listen for user input
process.stdin.on("data", function (inputFromUser) {
  // Convert the input to a number
  let num = Number(inputFromUser);

  // Check if the input is a valid number
  if (!isNaN(num)) {
    // If it's a valid number, push it to the numbers array
    numbers.push(num);
    // Ask the user to enter another number
    process.stdout.write("Please enter a number: ");
  } else {
    // If the input is not a number, process the entered numbers

    // Initialize sum to 0
    let sum = 0;

    // Loop through the numbers array and calculate the sum
    for (let i = 0; i <= numbers.length - 1; i++) {
      sum = sum + numbers[i]; // Add each number to sum
    }

    // Calculate the average of the numbers entered
    let avg = sum / numbers.length;

    // Output the non-numeric input entered by the user
    process.stdout.write("You entered a letter: " + inputFromUser + "\n");

    // Output the calculated average
    process.stdout.write("Average is: " + avg.toString() + "\n");

    // Exit the program after processing the input
    process.exit();
  }
});
