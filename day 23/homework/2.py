# შექმენით ფუნქცია რომელიც ამოწმებს რიცხვი კენტია თუ ლუწი.
def Even_or_Odd():
    number = int(input("choos a number: "))
    if number % 2 == 0:
        return "Even"
    else:
        return  "Odd"
print(Even_or_Odd())