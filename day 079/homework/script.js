//დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) 

function count_area(){
    let number = prompt("daasaxelet erti gverdis sigrdze: ")
    let number2 = prompt("daasaxelet meore gverdis sigrdze: ")
    console.log(number * number2)
}

count_area()

//და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)

function count_area(){
    let number = prompt("daasaxelet erti gverdis sigrdze: ")
    let number2 = prompt("daasaxelet meore gverdis sigrdze: ")
    let number3 = prompt("daasaxelet mesame gverdis sigrdze: ")
    console.log(number * number2 * number3)
}

count_area()