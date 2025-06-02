// 4. შექმენით ობიექტი სახელწოდებით phone: brand, model, storage, batteryLife და is5G კუთვნილებებით,
// გამოიყენეთ if ოპერატორი, რათა შეამოწმოთ, აქვს თუ არა ტელეფონს is5G დაყენებული true-ზე. თუ ასეა, დაბეჭდეთ 'supports 5G', წინააღმდეგ შემთხვევაში დაბეჭდეთ 'doesn't support 5G'.

let phone = {
    brand: "it's my brand",
    model: "Samsung galax s25 ultra pixel pro",
    batterylife: 100,
    is5G: true
}
let is5G = phone.is5G

if(is5G === true){
    console.log('supports 5G')
}
else{
    console.log("doesn't support 5G")
}