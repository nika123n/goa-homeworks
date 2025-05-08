// 2. შექმენით ობიექტი სახელად student ისეთი კუთვნილებებით, როგორებიცაა name, grade, passed და year.
// შემდეგ if-else გამოყენებით, შეამოწმეთ, არის თუ არა passed - true. თუ ასეა, დაბეჭდეთ: 'student passed the grade', წინააღმდეგ შემთხვევაში, დაბეჭდეთ 'student failed the grade'.

let student = {
    name: "Nikoloz Kublashvili",
    grade: 8,
    passed: true,
    year: 2025
}
let passed = student.passed

if(passed === true){
    console.log('student passed the grade')
}
else{
    console.log('student failed the grade')
}