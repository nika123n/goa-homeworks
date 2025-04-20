//3. შექმენით პროგრამა, რომელიც იყენებს while ციკლს, რათა გამოთვალოს 1-იდან 10-მდე ყველა რიცხვის ჯამი და გამოიტანოს შედეგი კონსოლში.

let number = 1
let sum = 0

while(number <= 10){
    
    sum += number
    number ++
}
console.log(sum)