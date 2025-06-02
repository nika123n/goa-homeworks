//5. შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს რიცხვის შეყვანას prompt()-ის გამოყენებით. შემდეგ კი დაპრინტეთ 1-იდან მაგ რიცხვამდე ყველა ციფრი.

let number = 1
let numberOfUser = prompt("Enter number: ")

while(number <= numberOfUser){
    console.log(number)
    number += 1
}