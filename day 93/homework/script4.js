//. შექმენით ობიექტი სახელწოდებით game, კუთვნილებებით: name, players, online, releaseYear და genre.
// შემდეგ გამოიყენეთ if-else განაცხადი, რათა შეამოწმოთ, არის თუ არა players კუთვნილების მნიშვნელობა 1-ზე მეტი. თუ ასეა, დაბეჭდეთ "Multiplayer game", სხვა შემთხვევაში დაბეჭდეთ "Single player game".

let game = {
    name: "FIFA 2025",
    players: 1000000,
    online: true
}
let players = game.players

if(players > 1){
    console.log("Multiplayer game")
}
else{
    console.log("Single player game")
}