//Write a function divide() that prompts the user for two numbers and returns their quotient.
function divide() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    
    const quotient = num1 / num2;
    return quotient;
}
const result = divide();
console.log("The quotient is: " + result);