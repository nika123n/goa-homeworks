//1. დაპრინტეთ ყველა კენტი რიცხვი n-მდე.

let number = 0
let number2 = Number(prompt("enter number: "))

while(number <= number2){
    number++
    if(number % 2 != 0){
        console.log(number)
    }
    else{
        continue
    }
}