//1. შექმენით Car კონსტრუქტორის ფუნქცია, რომელიც არგუმენტად მიიღებს მანქანის მარკას, მოდელს და წელს, შემდეგ კი მათი მეშვეობით შექმენით ახალი ობიექტი.

function car(marka, modeli, weli) {
  this.marka = marka
  this.modeli = modeli
  this.weli = weli
}
const person1 = new car("idk", "BMW", 2000)
const person2 = new car("idk", "mersedesi", 2020)
const person3 = new car("idk", "Toyota", 2023)

console.log(car)
console.log(car)
console.log(car)