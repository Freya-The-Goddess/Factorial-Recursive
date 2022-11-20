#Recursive Factorial coding interview question in Python3
#by Freya-The-Goddess

def factorial(n):
    if n == 1:
        return n
    else:
        return n * factorial(n-1) #recursive call

print(factorial(12))
