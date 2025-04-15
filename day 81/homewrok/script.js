// უყურეთ ჩანაწერის ბოლო მონაკვეთს თავიდან და შეასრულეთ შემდეგი დავალება:

// შექმენით ფორმა, სადაც გექნებათ ორი input (checkbox), ორი ცალი label-ით (option1, option2),

// თუ მომხმარებელი მონიშნავს ორივე მათგანს, ამ ორ ელემენტს ქვევით არსებულ
// ღილაკზე დაჭერისას უნდა გაეშვას ფუნქცია, 

// რომელშიც ამ ორი ელემენტის  მნიშვნელობა უნდა შედარდეს 
// ცვლადში და საიტზე და კონსოლში უნდა გამოიტანოს ტექსტი: result of the operation is true/false.

function checker(){
    let x1 = document.getElementById('user1').checked
    let x2 = document.getElementById('user2').checked
    let heading = document.getElementById('h1')

    let Result = `result of the operation is ${x1 && x2}`
    heading.textContent += Result
}