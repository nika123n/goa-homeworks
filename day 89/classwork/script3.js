//3. შექმენით for loop, სადაც გამოიტანთ 2-იდან 6-მდე რიცხვებს.

let number = 0

while(number <= 6){
    number++
    if(number % 2 == 0){
        console.log(number)
    }
    else{
        continue
    }
}