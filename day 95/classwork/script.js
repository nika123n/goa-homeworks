//შექმენით person კონსტრუქტორი კუთვნილებებით - name, lastname, age.
//შემდეგ მისი მეშვეობით შექმენით 3 ობიექტი.

function Person(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}
const person1 = new Person("ნიკა", "გამცემლიძე", 25);
const person2 = new Person("მარია", "ჯღარკავა", 30);
const person3 = new Person("ლაშა", "ბერიძე", 22);

console.log(person1);
console.log(person2);
console.log(person3);