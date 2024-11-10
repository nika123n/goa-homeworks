//შევქმნათ ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივის ელემეტების ჯამს
function sumOfNumber(arr){
    let total = 0
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
const number = [1,2,3,4,5]
const result = sumOfNumber(number)
console.log(result)
