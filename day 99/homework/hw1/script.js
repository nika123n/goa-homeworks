//1. შექმენით p ელემენტი და დაამატეთ შიგნით ტექსტი "This is added by JavaScript", createTextNode()-ს გამოყენებით.



function idk(){
    let p = document.createElement("p")
    let div = document.getElementById('div')
    p.textContent = "This is added by JavaScript"
    div.appendChild(p)

}