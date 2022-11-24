#Recursive Factorial coding interview question in Ruby
#by Freya-The-Goddess

def factorial(n)
    if n == 1
        return n
    else
        return n * factorial(n-1) #recursive call
    end
end

puts factorial(12)
