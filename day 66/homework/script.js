//1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.
function Even_or_Odd(){
    const number = Number(prompt('enter naumber: '));
    if (number % 2 == 0){
        console.log("number is Even")
    }else{
        console.log("number is Odd")
    }
}
Even_or_Odd();