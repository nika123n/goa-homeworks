#შექმენით ფუნქცია სახელად odd_index_sum რომელსაც გადაეცემა რიცხვების სია, თქენი დავალებაა შეკრიბოთ ყველა ის რიცხვი რომელიც დგას !!!!კენტ ინდექსზე!!!, მიღებული ჯამი დააბრუნეთ ფუნქციიდან
def odd_index_sum(numbers):
    return sum(numbers[i] for i in range(len(numbers)) if i % 2 != 0)

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
print(odd_index_sum(numbers))