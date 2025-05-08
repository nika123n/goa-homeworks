# 3. მოცემული გაქვთ სია - numbers = [5, 10, 15, 20, 25, 30]
# შენი დავალებაა, რომ დაპრინტო სიიდან ისეთი რიცხვები, რომლებიც უნაშთოდ იყოფა 10-ზე.

def functionOdd(number):
    count = []
    
    for char in number:
        if char % 10 == 0:
            count.append(char)
    return count
    
print(functionOdd([5,10,15,20,25,30]))