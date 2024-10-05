//Write a function fullName() that prompts the user to input their first name and last name, and returns the full name as a single string.
function fullName() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const completeName = `${firstName} ${lastName}`;
    
    return completeName;
}
const name = fullName();
console.log("Your full name is: " + name);