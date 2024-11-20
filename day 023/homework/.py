# შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი. ფუნქციამ უნდა ჩაატაროს ყველა არითმეტიკული მოქმედება ამ ორ რიცხვს შორის.
def  numbers():
    number = int(input("daasaxele ricxvi: "))
    number2 = int(input("daasaxele ricxvi: "))
    return number + number2, number - number2, number * number2, number // number2, number % number2
print(numbers())