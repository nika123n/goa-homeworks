// შექმენით საიტი სადაც იქნება მოსწავლის სახელი, ქვევით კი აურების რიცხვი, გქონდეთ ორი ღილაკი, 10 და 20, შესაბამის ღილაკზე დაჭერისას რიცხვი უნდა გახდეს 10 ან 20.
let count = 0

let countDisplay = document.getElementById('count')


function auraPoint10(){
     count = 10
    countDisplay.textContent = count
}

function auraPoint20(){
    count = 20
    countDisplay.textContent = count
}

function resetCount(){
    count = 0
    countDisplay.textContent = count
}