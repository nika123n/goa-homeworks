//3. შექმენი პროგრამა, რომელიც იყენებს while ციკლს იმის დასათვლელად, თუ რამდენი რიცხვია 1-იდან 5-მდე.


let number = 1
const numbers = []

while(number <= 5){
    numbers.push(number)
    number += 1
}
console.log(numbers.length)