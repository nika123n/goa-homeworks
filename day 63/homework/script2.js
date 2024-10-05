//Write a function add_numbers that takes two numbers and returns their sum. The second number should have a default value of 0.

function add_numbers(num1, num2 = 0) {
    const sum = num1 + num2;
    return sum;
}
console.log(add_numbers(5, 10));
console.log(add_numbers(5)); 