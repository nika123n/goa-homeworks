# 2. მოცემული გაქვთ სია - numbers = [10, 20, 30, 40, 50, 60]
# შენი დავალებაა, რომ დაპრინტო ყველა 25-ზე დიდი რიცხვი.

def functionOdd(number):
    count = []
    
    for char in number:
        if char > 25:
            count.append(char)
    return count
    
print(functionOdd([10,20,30,40,50,60]))