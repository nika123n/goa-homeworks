// შექმენით საიტი, სადაც გექნებათ ცვლადში შენახული სასურველი სიტყვა, შემდეგ მომხმარებელს თხოვეთ prompt()-ის მეშვეობით გამოიცნოს სიტყვა, სანამ მისი გამოცნობილი ჩვენსას არ დაემთხვევა, მანამდე გააგრძელედ მისთვის prompt()-ის მიცემა,

// ხოლო იმ შემთხვევისთვის, თუ ჩვენ სიტყვას "გააარტყა", ლუპის გარეთ გააკეთეთ alert('success')

let word = "jumberi"
let user = prompt('sheecade gamoicno sityva: ')

while(user != word){
    let user = prompt('sheecade gamoicno sityva: ')
}
if (user == word){
    console.log('gilocav, shen gamoicani sityva')
}