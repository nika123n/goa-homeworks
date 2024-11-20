#5. შექმენით ფუნქცია, რომელიც იღებს string'ს და აბრუნებს True-ს თუ ის არის Palindrome (ანუ იგივენაირად იკითხება მარცნიდანაც და მარჯვნიდანაც მაგალითად: "wow") და სხვა შემთხვევაში False-ს.
def palindrome():
    list = []
    list2 = []
    string = input("what is your name: ")
    list.append(string)
    string2 = input("what is your name: ")
    cvladi = string2[: : -1]
    list2.append(cvladi)
    if list == list2:
        return True
    else:
        return False

 
    
print(palindrome())

