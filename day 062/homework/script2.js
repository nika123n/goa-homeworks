//Write a function subtract() that prompts the user for two numbers and returns the difference.
function subtract() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const difference = num1 - num2;
    return difference;
}
const result = subtract();
console.log("The difference is: " + result);