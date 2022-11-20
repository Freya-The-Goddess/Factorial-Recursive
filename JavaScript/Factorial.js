//Recursive Factorial coding interview question in JavaScript
//by Freya-The-Goddess

function factorial(n) {
    if (n == 1) {
        return n
    } else {
        return n * factorial(n - 1) //recursive call
    }
}

function main() {
    output = factorial(12).toString()
    document.getElementById("result").textContent = output;
}

