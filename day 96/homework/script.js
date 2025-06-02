//1. შექმენით ფუნქცია, რომელიც იღებს რიცხვების ჩამონათვალს და აბრუნებს ახალ სიას, სადაც თითოეული რიცხვი მრავლდება 2-ზე, for loop და .append()-ის გამოყენებით.

function lists(list){
    let result = []
    
    for(let i = 0; i < list.length; i++){
        result.push(list[i] * 2)
    }
    console.log(result)
} 
lists([1,2,3,4,5])