// შექმენით ობიექტი სახელწოდებით class, 

// კუთვნილებებით: studentCount, grade და favSubject.

// შემდეგ გამოიყენეთ if-else განაცხადი, რათა შეამოწმოთ, არის თუ არა studentCount კუთვნილების მნიშვნელობა 30-ზე მეტი. 

// თუ ასეა, დაბეჭდეთ "very big class", სხვა შემთხვევაში დაბეჭდეთ "Small Class".

// Bonus: 
// დაამატეთ if-else დანარჩენი ორი მნიშვნელობისათვისაც.

const classroom = {
    studentCount: 30,
    grade: 8,
    favsubject: "sport"
}
let studentCount = classroom.studentCount
let grade = classroom.grade
let favSubject = classroom.favsubject

//studentcount
if(studentCount > 30){
    console.log("very big class")
}
else{
    console.log("Small Class")
}
//grade
if(grade >= 8){
    console.log("shen xar magal klaseli")

}
else{
    console.log("shen xar dabal klaseli")
}
//favsubjec
if(favSubject == "sport"){
    console.log("me too")
}
else{
    console.log("my favsubject is sport")
}