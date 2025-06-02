//2. შექმენით h2 ელემენტი ტექსტით "Welcome!", შემდეგ კი ჩასვით ის უკვე არსებული div-ში, რომელსაც მიანიჭებთ id-ს.

let h2 = document.createElement('h2')
let div = document.getElementById('div')
h2.textContent = "Welcome!"

div.appendChild(h2)