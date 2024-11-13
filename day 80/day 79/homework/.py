#დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი )

def count_area():
    number = int(input("daasaxelet erti gverdis sigrdze: "))
    number2 = int(input("daasaxelet meore gverdis sigrdze: "))
    return number * number2


print(count_area())

#და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)

def count_area():
    number = int(input("daasaxelet erti gverdis sigrdze: "))
    number2 = int(input("daasaxelet meore gverdis sigrdze: "))
    number3 = int(input("daasaxelet mesame gverdis sigrdze: "))
    return number * number2 * number3


print(count_area())
