//Write a function multiply() that prompts the user to input two numbers and returns their product.
function multiply() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const product = num1 * num2;
    return product;
}

const result = multiply();
console.log("The product is: " + result);