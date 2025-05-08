#1. მოცემული გაქვთ სია - numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#შენი დავალებაა, რომ დაპრინტო სიის გასსამმაგებული კენტი რიცხვები, 

def functionOdd(number):
    count = []
    
    for char in number:
        if char % 2 != 0:
            count.append(char)
    return count
    
print(functionOdd([1,2,3,4,5,6,7,8,9,10]))
 