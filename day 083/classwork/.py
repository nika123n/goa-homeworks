#ფუნქცია რომრლდაც გადაეცემა სამი არგუმენტი (რიცხვი , მეორე რიცხვი, მათემატიკური სიმბოლო (მიმატება, გამრავლება, გამოკლება, გაყოფა) და აბრუნებს შესაბამის შედეგს
#თუ არ იყოფა ორი რიცხხვი ან არ არის შესაბამისი არგუმენტები გადმოცემული გამოიტანოს ერორი


def math(num):
    number1 = int(input("daasaxeleT ricxvi: "))
    number2 = int(input("daasaxeleT ricxvi: "))

    if num == 1:
        return number1 + number2

    if num == 2:
        number1 - number2

    if num == 3:
        number1 * number2

    if num == 4:
        number1 / number2
    

print(math(1))
