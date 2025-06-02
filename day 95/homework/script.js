//შექმენით თქვენი თავის ობიექტი შემდეგი კუთვნილებებით: name, surname, age(შეგიძლიათ თქვენც მოიფიქროთ). იგვიე გზით შექმენით თქვენი რომელიმე ოჯახის წევრის ობიექტი.
// თქვენი დავალებაა:
// 1. დაბეჭდოთ ეს ობიექტები
// 2. დაბეჭდოთ მათი თიოეული კუთვნილება
// 3. შეუცვალეთ 2 ობიექტს რომელიმე კუთვნილება და დაბეჭდეთ
// 4. დაუმატეთ ახალი კუთვნილებები ორივეს და დაბეჭდეთ
// 5. წაშალეთ ამ ობიექტებში სასურველი კუთვნილება

const me = {
    name: "nika",
    surname: "kublashvili"
}

const myBrother = {
    name: "saba",
    surname: "kublashvili"
}

me.name = "jora"
myBrother.name = "jemali"
me.height = 179
myBrother.height = 179
delete me.height
delete myBrother.height

console.log(me)
console.log(myBrother)
console.log(me.name,me.surname)
console.log(myBrother.name,myBrother.surname)


