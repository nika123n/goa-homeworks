// Slicing-ის დახმარებით შექმენით პროგრამა, სადაც მომხმარებელი შემოიტანს ჯერ ორ რიცხვს, შემდეგ კი რაიმე სახელს, რომელსაც შეინახავთ ცვლადში, საბოლოოდ, მისი შემოტანილი სტრინგიდან სტრინგიდან ამოჭერით მომხმარებლის პირველი რიცხვიდან მეორე რიცხვამდე მონაკვეთი და დაპრინტეთ.

let number1 = prompt('enter number: ')
let number2 = prompt('enter number: ')
let name = prompt('enter name: ')

let list = []

list.push(number1)
list.push(number2)
list.push(name)

let newList = list.slice(0,1)
console.log(list);
console.log(newList)
