//შექმენით ღილაკი, რომელზე დაჭერის შემდეგაც საიტზე მანამდე ცარიელ div-ში ჩაემატება button ელემენტი,

// (დაგჭირდებათ ფუნქცია ჯავასკრიპტში,
// createElement, appendChild..)

function newText(){
    let main = document.getElementById("div")
    let newButton = document.createElement("button")
    newButton.textContent = "hallo"
    
    main.appendChild(newButton)
}
newText()