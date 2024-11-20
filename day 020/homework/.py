# შექმენით ფუნქცია hello() სადაც print ფუნქციის გამოყენებით გამოიტანთ  "GOA Best!"
def hello(userInput):
    result = []

    for char in userInput:
        result.append(char)

    return ''.join(result)

print(hello('Goa Best!'))

