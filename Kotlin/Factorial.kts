//Recursive Factorial coding interview question in Kotlin Script
//by Freya-The-Goddess

fun factorial(n: Int): Int {
    return if (n == 1) {
        n
    } else {
        n * factorial(n - 1) //recursive call
    }
}

println(factorial(12))
