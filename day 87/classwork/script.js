// შექმენით საიტი, სადაც გექნებათ ცვლადში შენახული სასურველი სიტყვა, შემდეგ მომხმარებელს თხოვეთ prompt()-ის მეშვეობით გამოიცნოს სიტყვა, სანამ მისი გამოცნობილი ჩვენსას არ დაემთხვევა, მანამდე გააგრძელედ მისთვის prompt()-ის მიცემა,

// ხოლო იმ შემთხვევისთვის, თუ ჩვენ სიტყვას "გააარტყა", ლუპის გარეთ გააკეთეთ alert('success')

let secretWord = jemali
let guess =  prompt("guess the word: ")

while(guess !== secretWord){
    guess = prompt("it's incorect, try again: ")
}

if (guess == secretWord){
    alert("success")
}